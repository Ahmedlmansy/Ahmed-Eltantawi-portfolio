import {
  CloudSun,
  LayoutDashboard,
  MessageCircle,
  Newspaper,
  ShoppingBag,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Project } from "@/types";

type Props = { type: Project["preview"]; title: string };

export function ProjectPreview({ type, title }: Props) {
  return (
    <div
      role="img"
      aria-label={`Illustrative interface preview for ${title}`}
      className="rounded-2xl border border-hairline bg-section p-4 sm:p-5"
    >
      {type === "chat" && <ChatPreview />}
      {type === "dashboard" && <DashboardPreview />}
      {type === "weather" && <WeatherPreview />}
      {type === "commerce" && <CommercePreview />}
      {type === "news" && <NewsPreview />}
      <p className="mt-3 text-[10px] font-medium uppercase tracking-wider text-ink-muted">
        Illustrative UI preview
      </p>
    </div>
  );
}

function ChatPreview() {
  return (
    <div className="mx-auto w-full max-w-[260px] rounded-[28px] border border-border-divider bg-elevated p-2 shadow-xs">
      <div className="overflow-hidden rounded-[21px] border border-hairline">
        <PreviewHeader icon={MessageCircle} title="Conversations" detail="Messaging preview" />
        <div className="space-y-3 p-3">
          <div className="max-w-[86%] rounded-2xl rounded-tl-sm border border-hairline bg-section p-3 text-[11px] leading-relaxed text-ink-secondary">
            A preview of the conversation interface.
          </div>
          <div className="ml-auto max-w-[86%] rounded-2xl rounded-tr-sm bg-primary p-3 text-[11px] leading-relaxed text-white">
            Messages appear in a clear, focused layout.
          </div>
          <div className="flex items-center gap-2 rounded-full border border-hairline bg-section px-3 py-2">
            <span className="text-[10px] text-ink-muted">Write a message</span>
            <span className="ml-auto h-5 w-5 rounded-full bg-primary" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardPreview() {
  return (
    <div className="rounded-xl border border-hairline bg-elevated p-4">
      <PreviewHeader icon={LayoutDashboard} title="Dashboard" detail="Responsive layout" />
      <div className="grid grid-cols-3 gap-2">
        {["Mobile", "Tablet", "Desktop"].map((label) => (
          <div key={label} className="rounded-lg border border-hairline bg-section p-2">
            <div className="mb-2 h-2 w-1/2 rounded-full bg-primary-light" />
            <div className="h-7 rounded-md bg-primary-surface" />
            <p className="mt-2 text-center text-[9px] font-medium text-ink-secondary">{label}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 flex h-16 items-end gap-2 rounded-lg border border-hairline bg-section p-3">
        {[35, 58, 45, 76, 62, 88, 54].map((height, index) => (
          <span
            key={index}
            className={`flex-1 rounded-t-sm ${index === 5 ? "bg-primary" : "bg-primary-light"}`}
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
    </div>
  );
}

function WeatherPreview() {
  return (
    <div className="rounded-xl border border-dusty/30 bg-dusty-light/60 p-5">
      <PreviewHeader icon={CloudSun} title="Local forecast" detail="Weather preview" />
      <div className="flex items-center justify-between rounded-xl border border-dusty/30 bg-elevated/80 p-4">
        <div>
          <p className="font-mono text-[9px] font-bold uppercase tracking-wider text-dusty-dark">
            Location-aware
          </p>
          <p className="mt-1 text-lg font-semibold text-ink">Current conditions</p>
        </div>
        <CloudSun aria-hidden="true" className="text-dusty-dark" size={36} strokeWidth={1.5} />
      </div>
      <div className="mt-3 flex items-center justify-between rounded-lg bg-elevated/70 px-4 py-3 text-[10px] font-medium text-ink-secondary">
        <span>Live REST API data</span>
        <span>Offline-first</span>
      </div>
    </div>
  );
}

function CommercePreview() {
  return (
    <div className="rounded-xl border border-hairline bg-elevated p-4">
      <PreviewHeader icon={ShoppingBag} title="Product management" detail="Commerce preview" />
      <div className="space-y-2">
        {["Product details", "Inventory", "Update listing"].map((label, index) => (
          <div
            key={label}
            className="flex items-center gap-3 rounded-lg border border-hairline bg-section p-3"
          >
            <span
              className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                index === 1 ? "bg-sand-light text-ink" : "bg-primary-surface text-primary"
              }`}
            >
              <ShoppingBag aria-hidden="true" size={15} />
            </span>
            <span className="text-xs font-semibold text-ink">{label}</span>
            <span className="ml-auto h-2 w-2 rounded-full bg-primary-light" aria-hidden="true" />
          </div>
        ))}
      </div>
    </div>
  );
}

function NewsPreview() {
  return (
    <div className="rounded-xl border border-hairline bg-elevated p-4">
      <PreviewHeader icon={Newspaper} title="News feed" detail="Reader preview" />
      <div className="space-y-2">
        {["Featured article", "Latest story"].map((title, index) => (
          <article key={title} className="rounded-lg border border-hairline bg-section p-3">
            <p className="font-mono text-[9px] font-bold uppercase tracking-wider text-primary">
              {index === 0 ? "Top story" : "Continue reading"}
            </p>
            <h4 className="mt-1 text-xs font-semibold text-ink">{title}</h4>
            <div className="mt-2 h-1.5 w-4/5 rounded-full bg-border-divider" />
            <div className="mt-1.5 h-1.5 w-3/5 rounded-full bg-border-divider" />
          </article>
        ))}
      </div>
      <p className="mt-3 text-[10px] text-ink-secondary">Paginated feed · In-app WebView</p>
    </div>
  );
}

function PreviewHeader({
  icon: Icon,
  title,
  detail,
}: {
  icon: LucideIcon;
  title: string;
  detail: string;
}) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-primary-light bg-primary-surface text-primary">
        <Icon aria-hidden="true" size={18} />
      </span>
      <div>
        <p className="text-xs font-semibold text-ink">{title}</p>
        <p className="mt-0.5 text-[10px] text-ink-muted">{detail}</p>
      </div>
    </div>
  );
}
