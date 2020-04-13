/**
 * This class ensure Core module has been loaded only once
 * Inside  the app
 */
export class EnsureModuleLoadedOnceGuard {
  constructor(targetModule: any) {
    if (targetModule) {
      throw new Error(
        `${targetModule.constructor.name} has already been loaded. Import this module in the AppModule only`
      );
    }
  }
}
