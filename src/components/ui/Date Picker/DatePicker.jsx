import { format } from "date-fns";
import { useEffect, useRef, useState } from "react";
import { SlCalender } from "react-icons/sl";
import { DayPicker } from "@daypicker/react";

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
          className="grow p-5 bg-neutral-content rounded-sm font-secondary font-bold text-accent placeholder:text-accent cursor-pointer"
          type="text"
          readOnly
          onClick={() => setOpen((o) => !o)}
          value={value ? format(value, "dd/MM") : ""}
          placeholder={placeholder}
        />{" "}
        <SlCalender
          className="text-accent text-3xl cursor-pointer"
          onClick={() => setOpen((o) => !o)}
        />
        {open && (
          <section
            role="dialog"
            className="absolute z-50 top-12 rounded-sm border border-secondary bg-primary px-4 py-3"
          >
            <DayPicker
              animate
              mode="single"
              selected={value}
              onSelect={handleSelect}
              defaultMonth={value}
              disabled={minDate ? { before: minDate } : undefined}
            />
          </section>
        )}
      </section>
    </section>
  );
}

export default DatePicker;
