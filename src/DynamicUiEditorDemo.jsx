import React, { useMemo, useRef, useState } from "react";

// --- Utility helpers -------------------------------------------------------
const clamp = (n, lo, hi) => Math.min(Math.max(n, lo), hi);
const shadowMap = {
  none: "",
  sm: "shadow",
  md: "shadow-md",
  lg: "shadow-lg",
};

const defaultConfig = {
  layout: "layout1", // or "layout2"
  typography: {
    family: "Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
    weight: 600,
    size: 20, // px
  },
  button: {
    radius: 12, // px
    shadow: "md", // none | sm | md | lg
    align: "center", // left | center | right
    bg: "#111827", // gray-900
    color: "#ffffff",
    strokeColor: "#111827",
    strokeWeight: 0,
  },
  gallery: {
    align: "center", // left | center | right
    spacing: 12, // px
    radius: 12, // px
  },
  general: {
    cardRadius: 16, // px
    containerPadding: 24, // px
    sectionBg: "#ffffff",
  },
  stroke: {
    color: "#e5e7eb", // gray-200
    weight: 1, // px
  },
};

// Simple placeholder images (pure CSS blocks) so the demo works offline
function PlaceholderImage({ radius = 12, strokeColor, strokeWeight }) {
  return (
    <div
      className="w-full aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden"
      style={{
        borderRadius: radius,
        border: `${strokeWeight}px solid ${strokeColor}`,
      }}
    >
      <div className="absolute inset-0 opacity-30 mix-blend-multiply bg-[radial-gradient(circle_at_30%_30%,#fff_0,transparent_40%),radial-gradient(circle_at_70%_70%,#fff_0,transparent_40%)]" />
    </div>
  );
}

// --- Preview Cards ---------------------------------------------------------
// --- Preview Layout 1 with real images ---
function PreviewLayout1({ cfg }) {
  const btnShadow = shadowMap[cfg.button.shadow] || "";
  const justifyMap = { left: "justify-start", center: "justify-center", right: "justify-end" };
  const galleryJustify = justifyMap[cfg.gallery.align];

  const galleryImages = [
    "/gallery1.jpg",
    "/gallery2.jpg",
    "/gallery3.jpg",
    "/gallery4.jpg",
    "/gallery5.jpg",
    "/gallery6.jpg",
  ];

  return (
    <section
      className="w-full"
      style={{
        background: cfg.general.sectionBg,
        border: `${cfg.stroke.weight}px solid ${cfg.stroke.color}`,
        borderRadius: cfg.general.cardRadius,
        padding: cfg.general.containerPadding,
        fontFamily: cfg.typography.family,
      }}
    >
      <div className="grid md:grid-cols-3 gap-6 items-center">
        <div className="md:col-span-2 space-y-3">
          <h1
            className="text-gray-900"
            style={{ fontWeight: cfg.typography.weight, fontSize: clamp(cfg.typography.size + 8, 10, 60) }}
          >
            Beautiful, Editable UI
          </h1>
          <p className="text-gray-600" style={{ fontSize: clamp(cfg.typography.size, 10, 60) }}>
            Live-preview tweaks to typography, layout, buttons, borders, and galleries — without touching code.
          </p>
          <div className={`flex ${justifyMap[cfg.button.align]}`}>
            <button
              className={`px-5 py-2 font-medium ${btnShadow}`}
              style={{
                background: cfg.button.bg,
                color: cfg.button.color,
                borderRadius: cfg.button.radius,
                border: `${cfg.button.strokeWeight}px solid ${cfg.button.strokeColor}`,
              }}
            >
              Primary Action
            </button>
          </div>
        </div>

        {/* Hero image */}
        <div className="md:col-span-1">
          <img
            src="/hero.jpg"
            alt="Hero"
            className="w-full object-cover"
            style={{
              borderRadius: cfg.gallery.radius,
              border: `${cfg.stroke.weight}px solid ${cfg.stroke.color}`,
              aspectRatio: "4 / 3",
            }}
          />
        </div>
      </div>

      {/* Gallery images */}
      <div
  className={`mt-8 flex flex-wrap ${galleryJustify}`}
  style={{ gap: cfg.gallery.spacing }}
>
  {galleryImages.map((src, i) => (
    <div key={i} className="w-[220px]">
      <img
        src={src}
        alt={`Gallery ${i + 1}`}
        className="w-full object-cover"
        style={{
          borderRadius: cfg.gallery.radius,
          border: `${cfg.stroke.weight}px solid ${cfg.stroke.color}`,
          aspectRatio: "4 / 3",
        }}
      />
    </div>
  ))}
</div>

    </section>
  );
}


// --- Preview Layout 2 with local images + working alignment ---
function PreviewLayout2({ cfg }) {
  const btnShadow = shadowMap[cfg.button.shadow] || "";
  const justifyMap = { left: "justify-start", center: "justify-center", right: "justify-end" };
  const galleryJustify = justifyMap[cfg.gallery.align];

  const galleryImages = [
    "/gallery1.jpg",
    "/gallery2.jpg",
    "/gallery3.jpg",
    "/gallery4.jpg",
    "/gallery5.jpg",
    "/gallery6.jpg",
  ];

  return (
    <section
      className="w-full"
      style={{
        background: cfg.general.sectionBg,
        border: `${cfg.stroke.weight}px solid ${cfg.stroke.color}`,
        borderRadius: cfg.general.cardRadius,
        padding: cfg.general.containerPadding,
        fontFamily: cfg.typography.family,
      }}
    >
      <div className="grid lg:grid-cols-3 gap-6">
        <aside className="lg:col-span-1 space-y-4">
          <div
            className="p-4 bg-white/50 border"
            style={{ borderRadius: cfg.general.cardRadius, borderColor: cfg.stroke.color, borderWidth: cfg.stroke.weight }}
          >
            <h3 className="text-gray-800" style={{ fontWeight: cfg.typography.weight, fontSize: clamp(cfg.typography.size, 10, 60) }}>
              Menu
            </h3>
            <ul className="mt-3 space-y-2 text-gray-600" style={{ fontSize: clamp(cfg.typography.size - 2, 10, 60) }}>
              {"Overview, Content, Media, Settings".split(", ").map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-gray-400" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className={`flex ${justifyMap[cfg.button.align]}`}>
            <button
              className={`px-5 py-2 font-medium ${btnShadow}`}
              style={{
                background: cfg.button.bg,
                color: cfg.button.color,
                borderRadius: cfg.button.radius,
                border: `${cfg.button.strokeWeight}px solid ${cfg.button.strokeColor}`,
              }}
            >
              Apply Changes
            </button>
          </div>
        </aside>

        <main className="lg:col-span-2 space-y-4">
          <h2 className="text-gray-900" style={{ fontWeight: cfg.typography.weight, fontSize: clamp(cfg.typography.size + 6, 10, 60) }}>
            Content Gallery
          </h2>

          {/* Flex wrap + fixed item width so left/center/right alignment is visible */}
          <div className={`flex flex-wrap ${galleryJustify}`} style={{ gap: 16 }}>
            {galleryImages.map((src, i) => (
              <div key={i} className="w-[220px]">
                <img
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  className="w-full object-cover"
                  style={{
                    borderRadius: cfg.gallery.radius,
                    border: `${cfg.stroke.weight}px solid ${cfg.stroke.color}`,
                    aspectRatio: "4 / 3",
                  }}
                />
              </div>
            ))}
          </div>
        </main>
      </div>
    </section>
  );
}

// --- Editor Controls -------------------------------------------------------
function Field({ label, children, hint }) {
  return (
    <label className="block">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-gray-700">{label}</span>
        {hint && <span className="text-[10px] text-gray-400">{hint}</span>}
      </div>
      <div className="mt-1">{children}</div>
    </label>
  );
}

function ColorInput({ value, onChange }) {
  return (
    <div className="flex items-center gap-2">
      <input type="color" value={value} onChange={(e) => onChange(e.target.value)} className="h-9 w-9 p-0 border rounded" />
      <input
        className="flex-1 px-2 py-1 border rounded text-sm"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="#000000"
      />
    </div>
  );
}

function NumberInput({ value, onChange, min = 0, max = 999, step = 1 }) {
  return (
    <input
      type="number"
      className="w-full px-2 py-1 border rounded text-sm"
      value={value}
      onChange={(e) => onChange(clamp(parseInt(e.target.value || 0, 10), min, max))}
      min={min}
      max={max}
      step={step}
    />
  );
}

function Segmented({ value, onChange, options }) {
  return (
    <div className="inline-flex rounded-xl border overflow-hidden">
      {options.map((opt) => (
        <button
          key={opt.value}
          className={`px-3 py-1.5 text-sm ${value === opt.value ? "bg-gray-900 text-white" : "bg-white text-gray-700"}`}
          onClick={() => onChange(opt.value)}
          type="button"
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

function EditorPanel({ cfg, setCfg, onReset, onImport, onExport }) {
  const set = (path, v) => {
    setCfg((prev) => {
      const next = structuredClone(prev);
      const parts = path.split(".");
      let cur = next;
      for (let i = 0; i < parts.length - 1; i++) cur = cur[parts[i]];
      cur[parts.at(-1)] = v;
      return next;
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-800">Editor</h3>
        <div className="flex items-center gap-2">
          <button onClick={onExport} className="px-3 py-1.5 text-sm rounded bg-gray-900 text-white">Export JSON</button>
          <button onClick={onImport} className="px-3 py-1.5 text-sm rounded border">Import</button>
          <button onClick={onReset} className="px-3 py-1.5 text-sm rounded border">Reset</button>
        </div>
      </div>

      {/* Layout Switching */}
      <div className="p-4 rounded-2xl border space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Layout</h4>
          <Segmented
            value={cfg.layout}
            onChange={(v) => set("layout", v)}
            options={[
              { value: "layout1", label: "Layout 1" },
              { value: "layout2", label: "Layout 2" },
            ]}
          />
        </div>
      </div>

      {/* Typography */}
      <div className="p-4 rounded-2xl border space-y-3">
        <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Typography</h4>
        <Field label="Font Family">
          <select
            className="w-full px-2 py-1 border rounded text-sm"
            value={cfg.typography.family}
            onChange={(e) => set("typography.family", e.target.value)}
          >
            <option value="Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif">Inter</option>
            <option value="Roboto, system-ui, -apple-system, Segoe UI, Inter, sans-serif">Roboto</option>
            <option value="Poppins, system-ui, -apple-system, Segoe UI, Inter, sans-serif">Poppins</option>
          </select>
        </Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Weight" hint="400–900">
            <NumberInput value={cfg.typography.weight} onChange={(v) => set("typography.weight", v)} min={400} max={900} step={100} />
          </Field>
          <Field label="Base Size (px)" hint="10–60">
            <NumberInput value={cfg.typography.size} onChange={(v) => set("typography.size", clamp(v, 10, 60))} min={10} max={60} />
          </Field>
        </div>
      </div>

      {/* Button */}
      <div className="p-4 rounded-2xl border space-y-3">
        <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Button</h4>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Border Radius (px)">
            <NumberInput value={cfg.button.radius} onChange={(v) => set("button.radius", v)} min={0} max={48} />
          </Field>
          <Field label="Shadow">
            <select className="w-full px-2 py-1 border rounded text-sm" value={cfg.button.shadow} onChange={(e) => set("button.shadow", e.target.value)}>
              <option value="none">None</option>
              <option value="sm">Small</option>
              <option value="md">Medium</option>
              <option value="lg">Large</option>
            </select>
          </Field>
          <Field label="Alignment">
            <Segmented
              value={cfg.button.align}
              onChange={(v) => set("button.align", v)}
              options={[{ value: "left", label: "Left" }, { value: "center", label: "Center" }, { value: "right", label: "Right" }]}
            />
          </Field>
          <div />
          <Field label="Background Color">
            <ColorInput value={cfg.button.bg} onChange={(v) => set("button.bg", v)} />
          </Field>
          <Field label="Text Color">
            <ColorInput value={cfg.button.color} onChange={(v) => set("button.color", v)} />
          </Field>
          <Field label="Stroke Color">
            <ColorInput value={cfg.button.strokeColor} onChange={(v) => set("button.strokeColor", v)} />
          </Field>
          <Field label="Stroke Weight (px)">
            <NumberInput value={cfg.button.strokeWeight} onChange={(v) => set("button.strokeWeight", v)} min={0} max={6} />
          </Field>
        </div>
      </div>

      {/* Gallery / Images */}
      <div className="p-4 rounded-2xl border space-y-3">
        <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Gallery / Images</h4>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Alignment">
            <Segmented
              value={cfg.gallery.align}
              onChange={(v) => set("gallery.align", v)}
              options={[{ value: "left", label: "Left" }, { value: "center", label: "Center" }, { value: "right", label: "Right" }]}
            />
          </Field>
          <Field label="Spacing (px)">
            <NumberInput value={cfg.gallery.spacing} onChange={(v) => set("gallery.spacing", v)} min={0} max={48} />
          </Field>
          <Field label="Image Radius (px)">
            <NumberInput value={cfg.gallery.radius} onChange={(v) => set("gallery.radius", v)} min={0} max={48} />
          </Field>
        </div>
      </div>

      {/* General Layout */}
      <div className="p-4 rounded-2xl border space-y-3">
        <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wide">General Layout</h4>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Card Corner Radius (px)">
            <NumberInput value={cfg.general.cardRadius} onChange={(v) => set("general.cardRadius", v)} min={0} max={48} />
          </Field>
          <Field label="Container Padding (px)">
            <NumberInput value={cfg.general.containerPadding} onChange={(v) => set("general.containerPadding", v)} min={0} max={64} />
          </Field>
          <Field label="Section Background">
            <ColorInput value={cfg.general.sectionBg} onChange={(v) => set("general.sectionBg", v)} />
          </Field>
        </div>
      </div>

      {/* Stroke / Border */}
      <div className="p-4 rounded-2xl border space-y-3">
        <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Stroke / Border</h4>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Stroke Color">
            <ColorInput value={cfg.stroke.color} onChange={(v) => set("stroke.color", v)} />
          </Field>
          <Field label="Stroke Weight (px)">
            <NumberInput value={cfg.stroke.weight} onChange={(v) => set("stroke.weight", v)} min={0} max={6} />
          </Field>
        </div>
      </div>
    </div>
  );
}

// --- Root Demo -------------------------------------------------------------
export default function DynamicUiEditorDemo() {
  const [cfg, setCfg] = useState(() => {
    try {
      const saved = localStorage.getItem("ui-cfg");
      return saved ? { ...defaultConfig, ...JSON.parse(saved) } : defaultConfig;
    } catch {
      return defaultConfig;
    }
  });
  const fileRef = useRef(null);

  // Only save on change
  React.useEffect(() => {
    localStorage.setItem("ui-cfg", JSON.stringify(cfg));
  }, [cfg]);



  const onReset = () => setCfg(defaultConfig);
  const onExport = () => {
    const data = new Blob([JSON.stringify(cfg, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(data);
    const a = document.createElement("a");
    a.href = url;
    a.download = `ui-config-${cfg.layout}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const onImport = () => fileRef.current?.click();
  const onImportFile = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(String(reader.result));
        setCfg((prev) => ({ ...prev, ...parsed }));
      } catch (err) {
        alert("Invalid JSON file");
      }
    };
    reader.readAsText(f);
  };

  const Preview = useMemo(() => (cfg.layout === "layout1" ? PreviewLayout1 : PreviewLayout2), [cfg.layout]);

  return (
    <div className="min-h-screen bg-gray-50">
      <input ref={fileRef} type="file" accept="application/json" className="hidden" onChange={onImportFile} />
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-2xl bg-gray-900" />
            <div>
              <div className="text-sm font-semibold">Dynamic UI Editor</div>
              <div className="text-xs text-gray-500">Live preview • JSON export • Layout switcher</div>
            </div>
          </div>
         <div className="hidden sm:flex items-center gap-2">
  <a
    href="https://github.com/dakshsharma02/dynamic-ui-editor"
    target="_blank"
    className="text-xs text-gray-600 hover:text-gray-900"
  >
    GitHub
  </a>

  <a
    href="https://github.com/dakshsharma02/dynamic-ui-editor#readme"
    target="_blank"
    className="text-xs text-gray-600 hover:text-gray-900"
  >
    Docs
  </a>
</div>

        </div>
      </header>

      <main className="max-w-7xl mx-auto p-4 grid lg:grid-cols-[1fr_380px] gap-6">
        <div className="space-y-6">
          <Preview cfg={cfg} />
          <div className="text-xs text-gray-500">
            Tip: Switch layouts above, then tweak typography, buttons, gallery spacing/radius, borders, and colors. Export your config and reuse it later.
          </div>
        </div>

        <aside className="lg:sticky lg:top-16 h-fit">
          <EditorPanel cfg={cfg} setCfg={setCfg} onReset={onReset} onExport={onExport} onImport={onImport} />
        </aside>
      </main>

      <footer className="max-w-7xl mx-auto px-4 py-8 text-xs text-gray-500">
        Built by Daksh Sharma.
      </footer>
    </div>
  );
}


