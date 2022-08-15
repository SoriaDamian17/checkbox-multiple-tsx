export interface IdValue {
  id: string;
  value: string;
  placeholder?: string;
  input?: string;
  disabled?: boolean;
}

export const buildingAreasOptions: IdValue[] = [
  {
    id: "1",
    value: "Interior"
  },
  {
    id: "2",
    value: "Façade and immediate surroundings",
    placeholder: "",
    input: "",
    disabled: true
  },
  {
    id: "3",
    value: "Roof"
  },
  {
    id: "4",
    value: "Site (topo, streets, parking spaces, curbs, manholes)"
  },
  {
    id: "5",
    value: "Underground utilities"
  },
  {
    id: "6",
    value: "Interstitial space between ceiling and roof/slab",
    placeholder: "",
    input: "",
    disabled: true
  },
  {
    id: "7",
    value: "Below raised floor"
  },
  {
    id: "8",
    value: "Crawl space"
  },
  {
    id: "9",
    value: "Other",
    placeholder: "",
    input: "",
    disabled: true
  }
];
