/**
 * Ambiance nocturne audio manager for Encre & Ombre.
 * Plays the 2-minute (120s) nocturnal rain and storm soundscape with Web Audio fallback.
 */

export interface AudioState {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
}

type AudioListener = (state: AudioState) => void;

class AmbianceSoundscape {
  private audio: HTMLAudioElement | null = null;
  private isPlaying: boolean = false;
  private duration: number = 120; // 2 minutes strict
  private volume: number = 0.65;
  private listeners: Set<AudioListener> = new Set();
  private timeUpdateInterval: number | null = null;

  // Web Audio API fallback in case HTMLAudioElement is unavailable
  private ctx: AudioContext | null = null;
  private gainNode: GainNode | null = null;
  private noiseNode: AudioBufferSourceNode | null = null;
  private usingFallback: boolean = false;

  constructor() {
    if (typeof window !== 'undefined') {
      try {
        this.audio = new Audio('/audio/ambiance-nocturne.mp3');
        this.audio.loop = false;
        this.audio.volume = this.volume;

        this.audio.addEventListener('timeupdate', () => {
          if (!this.audio) return;
          if (this.audio.currentTime >= 120) {
            this.stop();
            this.audio.currentTime = 0;
          }
          this.notifyListeners();
        });

        this.audio.addEventListener('ended', () => {
          this.stop();
        });

        this.audio.addEventListener('pause', () => {
          if (this.isPlaying) {
            this.isPlaying = false;
            this.notifyListeners();
          }
        });

        this.audio.addEventListener('play', () => {
          this.isPlaying = true;
          this.notifyListeners();
        });
      } catch {
        this.audio = null;
      }
    }
  }

  public subscribe(listener: AudioListener): () => void {
    this.listeners.add(listener);
    listener(this.getState());
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notifyListeners() {
    const state = this.getState();
    this.listeners.forEach((listener) => {
      try {
        listener(state);
      } catch {
        // ignore listener errors
      }
    });
  }

  public getState(): AudioState {
    return {
      isPlaying: this.isPlaying,
      currentTime: this.audio ? Math.min(this.audio.currentTime, 120) : 0,
      duration: this.duration,
      volume: this.volume
    };
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }

  public setVolume(val: number) {
    const clamped = Math.max(0, Math.min(1, val));
    this.volume = clamped;
    if (this.audio) {
      this.audio.volume = clamped;
    }
    if (this.gainNode && this.ctx) {
      this.gainNode.gain.setValueAtTime(clamped * 0.3, this.ctx.currentTime);
    }
    this.notifyListeners();
  }

  public getVolume(): number {
    return this.volume;
  }

  public seek(seconds: number) {
    const target = Math.max(0, Math.min(120, seconds));
    if (this.audio) {
      this.audio.currentTime = target;
      this.notifyListeners();
    }
  }

  public start() {
    if (this.audio) {
      // If at end of 2 minutes, restart from beginning
      if (this.audio.currentTime >= 120) {
        this.audio.currentTime = 0;
      }
      this.audio.volume = this.volume;
      this.audio
        .play()
        .then(() => {
          this.isPlaying = true;
          this.usingFallback = false;
          this.notifyListeners();
        })
        .catch(() => {
          // Autoplay policy or format fallback to Web Audio API
          this.startWebAudioFallback();
        });
    } else {
      this.startWebAudioFallback();
    }
  }

  public stop() {
    if (this.audio) {
      try {
        this.audio.pause();
      } catch {
        // ignore
      }
    }
    if (this.usingFallback) {
      this.stopWebAudioFallback();
    }
    this.isPlaying = false;
    this.notifyListeners();
  }

  private startWebAudioFallback() {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!this.ctx) {
        this.ctx = new AudioCtx();
      }
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      const sampleRate = this.ctx.sampleRate;
      const bufferSize = sampleRate * 2;
      const buffer = this.ctx.createBuffer(1, bufferSize, sampleRate);
      const data = buffer.getChannelData(0);

      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.04;
        b6 = white * 0.115926;
      }

      this.noiseNode = this.ctx.createBufferSource();
      this.noiseNode.buffer = buffer;
      this.noiseNode.loop = true;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(500, this.ctx.currentTime);

      this.gainNode = this.ctx.createGain();
      this.gainNode.gain.setValueAtTime(this.volume * 0.25, this.ctx.currentTime);

      this.noiseNode.connect(filter);
      filter.connect(this.gainNode);
      this.gainNode.connect(this.ctx.destination);
      this.noiseNode.start();

      this.isPlaying = true;
      this.usingFallback = true;
      this.notifyListeners();
    } catch {
      this.isPlaying = false;
    }
  }

  private stopWebAudioFallback() {
    if (this.gainNode && this.ctx) {
      try {
        this.gainNode.gain.setValueAtTime(0.001, this.ctx.currentTime);
      } catch {
        // ignore
      }
    }
    if (this.noiseNode) {
      try {
        this.noiseNode.stop();
        this.noiseNode.disconnect();
      } catch {
        // ignore
      }
    }
    this.usingFallback = false;
  }
}

export const ambianceSoundscape = new AmbianceSoundscape();
