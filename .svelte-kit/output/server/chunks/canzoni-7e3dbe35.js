import { n as noop, d as safe_not_equal, f as get_store_value } from "./index-19e9ff0b.js";
const subscriber_queue = [];
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe };
}
let canzoniStore = writable([]);
class Canzoni {
  constructor() {
    this.carica();
    canzoniStore.subscribe((canzoni) => this.salva(canzoni));
  }
  agg(canzone) {
    canzoniStore.update((canzoni) => [...canzoni, canzone]);
  }
  trova(canzoneId) {
    const canzoni = get_store_value(canzoniStore);
    if (canzoneId >= canzoni.length) {
      return void 0;
    }
    return canzoni[canzoneId];
  }
  carica() {
    {
      return;
    }
  }
  salva(canzoni) {
    {
      return;
    }
  }
}
var Canzoni$1 = new Canzoni();
export { Canzoni$1 as C, canzoniStore as c };
