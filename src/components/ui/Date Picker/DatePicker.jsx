import { format } from "date-fns";
import { useEffect, useRef, useState } from "react";
import { SlCalender } from "react-icons/sl";
import { DayPicker } from "@daypicker/react";

const dayPickerClassNames = {
  months: "",
  month: "space-y-3",
  month_caption: "flex items-center justify-center relative h-8 mb-1",
  caption_label: "font-secondary text-sm font-medium text-neutral",
  nav: "flex items-center justify-between absolute inset-x-0 top-0 h-8 px-1",
  button_previous:
    "rounded-sm p-1 text-accent hover:bg-neutral-content disabled:opacity-30",
  button_next:
    "rounded-sm p-1 text-accent hover:bg-neutral-content disabled:opacity-30",
  month_grid: "w-full border-collapse",
  weekdays: "flex",
  weekday:
    "w-9 text-center font-secondary text-xs font-medium text-neutral/50 pb-1",
  week: "flex w-full",
  day: "w-9 h-9 p-0 text-center text-sm relative",
  day_button:
    "w-9 h-9 rounded-sm font-secondary text-neutral hover:bg-neutral-content transition cursor-pointer",
  selected:
    "[&>button]:bg-accent [&>button]:text-primary [&>button]:hover:bg-accent",
  today: "[&>button]:border [&>button]:border-accent",
  outside: "text-neutral/30",
  disabled: "text-neutral/20 cursor-not-allowed",
  hidden: "invisible",
};

function DatePicker({ label, value, onChange, minDate, placeholder }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    const handleEscape = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleSelect = (selectedDate) => {
    if (!selectedDate) return;
    onChange(selectedDate);
    setOpen(false);
  };

  return (
    <section className="w-1/2 flex flex-col gap-1">
      <label className="font-secondary font-medium text-neutral">{label}</label>
      <section className="relative flex items-center gap-4" ref={containerRef}>
        <input
          className="grow p-5 bg-neutral-content rounded-sm font-secondary font-bold placeholder:text-accent cursor-pointer"
          type="text"
          readOnly
          onClick={() => setOpen((o) => !o)}
          value={value ? format(value, "dd/MM") : ""}
          placeholder={placeholder}
        />{" "}
        <SlCalender
          className="text-accent text-lg cursor-pointer"
          onClick={() => setOpen((o) => !o)}
        />
        {open && (
          <section
            role="dialog"
            className="absolute z-50 top-full mt-2 right-0 rounded-sm border border-neutral-content bg-primary p-3 shadow-lg"
          >
            <DayPicker
              animate
              mode="single"
              selected={value}
              onSelect={handleSelect}
              defaultMonth={value}
              disabled={minDate ? { before: minDate } : undefined}
              classNames={dayPickerClassNames}
            />
          </section>
        )}
      </section>
    </section>
  );
}

export default DatePicker;
