

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.b509f725.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.bad58c3a.js","_app/immutable/chunks/singletons.fdb17e01.js"];
export const stylesheets = [];
export const fonts = [];
