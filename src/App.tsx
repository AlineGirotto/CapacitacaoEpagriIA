/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Presentation from './components/Presentation';

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Presentation />

      <div className="group fixed bottom-4 right-4 z-[100] select-none">
        <button
          type="button"
          aria-label="Informação sobre uso de IA no conteúdo"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/35 bg-black/55 text-white backdrop-blur-sm transition-all duration-300 hover:w-auto hover:bg-black/65 hover:px-3 focus-visible:w-auto focus-visible:px-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
        >
          <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white/70 text-[11px] font-bold leading-none">
            i
          </span>
          <span className="max-w-0 overflow-hidden whitespace-nowrap text-[11px] font-semibold leading-none tracking-wide opacity-0 transition-all duration-300 group-hover:ml-2 group-hover:max-w-[320px] group-hover:opacity-100 group-focus-within:ml-2 group-focus-within:max-w-[320px] group-focus-within:opacity-100 md:text-xs">
            Conteúdo construído com apoio de IA
          </span>
        </button>
      </div>
    </div>
  );
}
