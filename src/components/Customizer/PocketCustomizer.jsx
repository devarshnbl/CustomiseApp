import React, { useState } from "react";
import { Plus, Trash2, Save } from "lucide-react";

const defaultFields = [
  {
    id: 1,
    label: "Type",
    value: "Classic",
    type: "text",
    isEditing: false,
    isEditingLabel: false,
  },
  {
    id: 2,
    label: "Image",
    value: "",
    type: "file",
    isEditing: false,
    isEditingLabel: false,
  },
  {
    id: 3,
    label: "Description",
    value: "",
    type: "textarea",
    isEditing: false,
    isEditingLabel: false,
  },
];

const PocketCustomizer = () => {
  const [pockets, setPockets] = useState([
    {
      id: 1,
      type: "Classic",
      fields: defaultFields,
    },
  ]);

  const addNewField = (pocketId) => {
    const pocket = pockets.find((p) => p.id === pocketId);

    const newFields = defaultFields.map((field) => ({
      ...field,
      id:
        pocket.fields.length > 0
          ? Math.max(...pocket.fields.map((f) => f.id)) + 1 + field.id
          : field.id,
      isEditing: true, // Default to editable mode
    }));

    setPockets((prev) =>
      prev.map((p) =>
        p.id === pocketId
          ? {
              ...p,
              fields: [...p.fields, ...newFields],
            }
          : p
      )
    );
  };

  const deleteField = (pocketId, fieldId) => {
    setPockets((prev) =>
      prev.map((p) =>
        p.id === pocketId
          ? {
              ...p,
              fields: p.fields.filter((f) => f.id !== fieldId),
            }
          : p
      )
    );
  };

  const updateFieldValue = (pocketId, fieldId, value) => {
    setPockets((prev) =>
      prev.map((p) =>
        p.id === pocketId
          ? {
              ...p,
              fields: p.fields.map((f) =>
                f.id === fieldId ? { ...f, value } : f
              ),
            }
          : p
      )
    );
  };

  const toggleFieldEditing = (pocketId, fieldId) => {
    setPockets((prev) =>
      prev.map((p) =>
        p.id === pocketId
          ? {
              ...p,
              fields: p.fields.map((f) =>
                f.id === fieldId ? { ...f, isEditing: !f.isEditing } : f
              ),
            }
          : p
      )
    );
  };

  const updateFieldLabel = (pocketId, fieldId, label) => {
    setPockets((prev) =>
      prev.map((p) =>
        p.id === pocketId
          ? {
              ...p,
              fields: p.fields.map((f) =>
                f.id === fieldId ? { ...f, label } : f
              ),
            }
          : p
      )
    );
  };

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Pocket Customizer</h2>
        </div>
        <div className="card-body">
          {pockets.map((pocket) => (
            <div key={pocket.id} className="border rounded p-3 mb-4">
              <div className="d-flex align-items-center mb-3">
                <label className="me-2 fw-bold">Custom Field:</label>
                <input
                  type="text"
                  className="form-control me-2"
                  placeholder="Pocket Type"
                  value={pocket.type}
                  onChange={(e) =>
                    setPockets((prev) =>
                      prev.map((p) =>
                        p.id === pocket.id ? { ...p, type: e.target.value } : p
                      )
                    )
                  }
                />
                <button
                  className="btn btn-danger"
                  onClick={() =>
                    setPockets((prev) => prev.filter((p) => p.id !== pocket.id))
                  }
                >
                  <Trash2 className="me-1" />
                </button>
              </div>
              {pocket.fields.map((field) => (
                <div
                  key={field.id}
                  className="d-flex align-items-center justify-content-between mb-2 border p-2 rounded"
                >
                  <span className="me-2 fw-bold">{field.label}:</span>
                  {field.isEditing ? (
                    <>
                      <input
                        type={field.type}
                        className="form-control me-2"
                        value={field.value}
                        onChange={(e) =>
                          updateFieldValue(pocket.id, field.id, e.target.value)
                        }
                      />
                      <button
                        className="btn btn-success"
                        onClick={() => toggleFieldEditing(pocket.id, field.id)}
                      >
                        <Save className="me-1" />
                      </button>
                    </>
                  ) : (
                    <>
                      <span
                        className="me-2"
                        onClick={() => toggleFieldEditing(pocket.id, field.id)}
                      >
                        {field.value || "Click to edit"}
                      </span>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteField(pocket.id, field.id)}
                      >
                        <Trash2 className="me-1" />
                      </button>
                    </>
                  )}
                </div>
              ))}
              <button
                className="btn btn-outline-primary mb-2"
                onClick={() => addNewField(pocket.id)}
              >
                <Plus className="me-1" /> Add New Field
              </button>
            </div>
          ))}
          <button
            className="btn btn-outline-success"
            onClick={() =>
              setPockets((prev) => [
                ...prev,
                {
                  id: prev.length + 1,
                  type: "Classic",
                  fields: defaultFields,
                },
              ])
            }
          >
            <Plus className="me-1" /> Add New Pocket Type
          </button>
        </div>
      </div>
    </div>
  );
};

export default PocketCustomizer;
