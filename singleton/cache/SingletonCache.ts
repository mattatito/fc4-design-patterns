export class SingletonCache {
  private cache: Map<String, any>;
  private static instance: SingletonCache | null = null;

  private constructor() {
    this.cache = new Map<String, any>();
  }

  public static getInstance(): SingletonCache {
    if (this.instance == null) {
      this.instance = new SingletonCache();
    }
    return this.instance;
  }

  set(key: string, value: any) {
    this.cache.set(key, value);
  }

  get(key: string): any {
    return this.cache.get(key);
  }

  has(key: string): boolean {
    return this.cache.has(key);
  }

  clear(): void {}
}
