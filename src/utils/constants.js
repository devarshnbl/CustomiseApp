export const fieldTypes = [
  { value: "text", label: "Text Input" },
  { value: "label", label: "Label" },
  { value: "file", label: "File Upload" },
  { value: "textarea", label: "Text Area" },
  { value: "select", label: "Dropdown" },
];

export const defaultFields = [
  {
    label: "Type",
    value: "Classic",
    type: "text",
    isEditing: false,
    isEditingLabel: false,
  },
  {
    label: "Image",
    value: "",
    type: "file",
    isEditing: false,
    isEditingLabel: false,
  },
  {
    label: "Description",
    value: "",
    type: "textarea",
    isEditing: false,
    isEditingLabel: false,
  },
];
