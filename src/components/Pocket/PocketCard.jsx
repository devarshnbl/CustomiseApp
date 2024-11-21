import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button, Select, TextInput, Textarea } from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { Edit, Save, Plus, Trash2 } from "lucide-react";
import PocketField from "./PocketField";

const PocketCard = ({ pocket, onDelete, pockets, setPockets }) => {
  const togglePocketTextEdit = (pocketId) => {
    setPockets(
      pockets.map((p) => {
        if (p.id === pocketId) {
          return { ...p, isEditing: !p.isEditing };
        }
        return p;
      })
    );
  };

  const updatePocketText = (pocketId, newText) => {
    setPockets(
      pockets.map((p) => {
        if (p.id === pocketId) {
          return { ...p, text: newText };
        }
        return p;
      })
    );
  };

  const addNewField = (pocketId) => {
    const lastFieldId = Math.max(
      ...pockets.flatMap((p) => p.fields.map((f) => f.id))
    );

    setPockets(
      pockets.map((p) => {
        if (p.id === pocketId) {
          return {
            ...p,
            fields: [
              ...p.fields,
              {
                id: lastFieldId + 1,
                label: "New Field",
                value: "",
                type: "text",
                isEditing: false,
                isEditingLabel: false,
              },
            ],
          };
        }
        return p;
      })
    );
  };

  return (
    <Card className="border">
      <CardHeader className="flex flex-row justify-between items-center">
        <div className="flex items-center gap-2">
          {pocket.isEditing ? (
            <div className="flex gap-2 items-center">
              <Input
                type="text"
                value={pocket.text}
                onChange={(e) => updatePocketText(pocket.id, e.target.value)}
                className="text-lg font-semibold"
              />
              <Button size="sm" onClick={() => togglePocketTextEdit(pocket.id)}>
                <Save className="w-4 h-4" />
              </Button>
            </div>
          ) : (
            <div className="flex gap-2 items-center">
              <CardTitle className="text-lg">{pocket.text}</CardTitle>
              <Button
                variant="outline"
                size="sm"
                onClick={() => togglePocketTextEdit(pocket.id)}
              >
                <Edit className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>
        <Button variant="outline" size="sm" onClick={() => onDelete(pocket.id)}>
          <Trash2 className="w-4 h-4" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {pocket.fields.map((field) => (
          <PocketField
            key={field.id}
            field={field}
            pocket={pocket}
            pockets={pockets}
            setPockets={setPockets}
          />
        ))}
        <div className="mt-4">
          <Button
            variant="outline"
            onClick={() => addNewField(pocket.id)}
            className="w-full"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add New Field
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PocketCard;
