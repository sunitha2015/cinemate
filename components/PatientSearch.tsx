"use client";

import React from "react";
import { Autocomplete, AutocompleteItem, AutocompleteSection } from "@heroui/autocomplete";
import { Avatar } from "@heroui/avatar";
import { Button } from "@heroui/button";
import { useDisclosure } from "@heroui/modal";
import { SearchIcon, LucidePlusIcon, MdiCalendarIcon } from "./icons";
import { AddPatientModal } from "./Modals/AddPatientModal";
import { patientlistdetails } from "@/components/PatientListdata";
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/table";



export default function PatientSearch() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
const patients = patientlistdetails.map((patient) => ({
  id: patient.id.toString(),
  name: patient.memberInfo.name,
  sex: patient.sex,
  age: patient.dateofBirthInfo.age,
  dob: patient.dateofBirthInfo.dob,
  avatar: `https://i.pravatar.cc/150?u=${patient.id}`,
}));
  return (
    <>
      <div className="flex items-center gap-2 w-full z-50">
        <Autocomplete
          aria-label="Search patients"
          defaultItems={patients}
          classNames={{
            base: "w-full max-w-4xl",
            listboxWrapper: "max-h-[300px]",
            selectorButton: "text-default-500",
          }}
          inputProps={{
            classNames: {
              inputWrapper: "h-[48px] ",
              input: "ml-1 text-base !outline-none",
            },
          }}
          popoverProps={{
            offset: 8,
            classNames: {
              content: "p-1 border-small border-default-100 bg-content1 rounded-large",
            },
          }}
          listboxProps={{
            itemClasses: {
              base: [
                "text-default-500",
                "rounded-none",
                "data-[hover=true]:bg-default-100",
                "data-[focus-visible=true]:ring-0",
              ],
            },
          }}
          placeholder="Search patients by name or ID"
          startContent={<SearchIcon className="size-4" />}
          variant="bordered"
          radius="full"
          size="lg"
        >
  <AutocompleteSection showDivider title="">
  {/* Custom Header Row */}
 
  {/* Patient Items */}
  {patients.map((item) => (
    <AutocompleteItem key={item.id} textValue={item.name}>
      <div className="grid grid-cols-[50px_1fr_1fr] gap-5 items-center px-1 py-2 text-sm border-b last:border-0">
        <div className="text-default-600 text-xs truncate">{item.id}</div>
        <div className="flex flex-col text-left">
          <p className="text-sm font-medium truncate">{item.name}</p>
          <p className="text-xs text-default-400">{item.sex}</p>
        </div>
        <div className="flex flex-col items-start text-left">
          <p className="text-sm">{item.age} Years</p>
          <p className="flex items-center gap-1 text-xs text-default-500">
            <MdiCalendarIcon className="size-4 text-default-600" />
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            }).format(new Date(item.dob))}
          </p>
        </div>
      </div>
    </AutocompleteItem>
  ))}
</AutocompleteSection>


  <AutocompleteSection  title=""><AutocompleteItem className="hover:bg-transparent">          
    <Button variant="solid" color="secondary" size="md" onPress={onOpen} startContent={<LucidePlusIcon className="size-5" />} className="gap-1 font-semibold">Add Patient</Button>
  </AutocompleteItem></AutocompleteSection>

  
        </Autocomplete>

     </div>
      <AddPatientModal isOpen={isOpen} onClose={onOpenChange} />
    </>
  );
}
