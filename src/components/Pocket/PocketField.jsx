import React from "react";
import { Input } from "../../components/ui/input";
import { Button, Select, TextInput, Textarea } from "../../components/ui/form";
import { Edit, Save, Trash2 } from "lucide-react";
import { fieldTypes } from "../../utils/constants";

const PocketField = ({ field, pocket, pockets, setPockets }) => {
  // Field manipulation functions
  const updateFieldValue = (pocketId, fieldId, newValue) => {
    setPockets(
      pockets.map((p) => {
        if (p.id === pocketId) {
          return {
            ...p,
            fields: p.fields.map((f) => {
              if (f.id === fieldId) {
                return { ...f, value: newValue };
              }
              return f;
            }),
          };
        }
        return p;
      })
    );
  };

  // Add other field-related functions here (toggleFieldEdit, updateFieldType, etc.)

  const renderInputByType = () => {
    switch (field.type) {
      case "textarea":
        return (
          <textarea
            value={field.value}
            onChange={(e) =>
              updateFieldValue(pocket.id, field.id, e.target.value)
            }
            className="w-full p-2 border rounded"
            rows="3"
          />
        );
      // Add other input type cases
    }
  };

  return <div className="space-y-2">{/* Field rendering logic */}</div>;
};

export default PocketField;
