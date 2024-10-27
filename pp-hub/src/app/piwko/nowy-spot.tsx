import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function NowySpot() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">Nowy spot</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Nowy spot</DialogTitle>
          <DialogDescription>Zaproponuj nowy spot</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Nazwa
            </Label>
            <Input id="name" placeholder="Nazwa spotu" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Miasto
            </Label>
            <Input id="city" placeholder="Miasto" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Wyślij propozycję</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
