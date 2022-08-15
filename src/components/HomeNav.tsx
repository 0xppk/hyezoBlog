import { Darkmode, CommandPaletteIcon } from "@/components";

export default function Nav() {
  return (
    <div className="my-8 flex justify-end space-x-3 sm:mr-4">
      <CommandPaletteIcon />
      <Darkmode />
    </div>
  );
}
