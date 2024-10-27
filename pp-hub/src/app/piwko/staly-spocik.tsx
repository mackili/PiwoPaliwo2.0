"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function StalySpot() {
  const [position, setPosition] = React.useState("tender");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="default">Stały Spot</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Wrocław</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="tender">Czuła</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="strych">
            Strych Wąsiela
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="swing">Huśtawka</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="rudera">Rudera</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
        <DropdownMenuLabel>Warszawa</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="wwa">Raszyńska</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
