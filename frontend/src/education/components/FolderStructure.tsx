import { createContext, useState } from "react";
import { FolderIcon, FolderOpenIcon, FileIcon } from "../../assets/Icons";

type TreeViewElement = {
  id: string;
  name: string;
  isSelectable?: boolean;
  children?: TreeViewElement[];
};

type TreeContextProps = {
  selectedId: string | undefined;
  expandedItems: string[];
  handleExpand: (id: string) => void;
  selectItem: (id: string) => void;
};

const TreeContext = createContext<TreeContextProps | null>(null);

export const FolderStructure = ({ 
  elements = [], 
  initialSelectedId 
}: { 
  elements: TreeViewElement[];
  initialSelectedId?: string;
}) => {
  const [selectedId, setSelectedId] = useState<string | undefined>(initialSelectedId);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const handleExpand = (id: string) => {
    setExpandedItems(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const selectItem = (id: string) => setSelectedId(id);

  const renderItem = (item: TreeViewElement) => {
    const isExpanded = expandedItems.includes(item.id);
    const isSelected = selectedId === item.id;

    if (item.children) {
      return (
        <div key={item.id}>
          <div
            className={`flex items-center gap-2 p-2 cursor-pointer rounded-md ${
              isSelected ? 'bg-gray-200' : 'hover:bg-gray-100'
            }`}
            onClick={() => handleExpand(item.id)}
          >
            {isExpanded ? (
              <FolderOpenIcon className="w-4 h-4" />
            ) : (
              <FolderIcon className="w-4 h-4" />
            )}
            <span>{item.name}</span>
          </div>
          {isExpanded && (
            <div className="ml-4">
              {item.children.map(child => renderItem(child))}
            </div>
          )}
        </div>
      );
    }

    return (
      <div
        key={item.id}
        className={`flex items-center gap-2 p-2 cursor-pointer rounded-md ${
          isSelected ? 'bg-gray-200' : 'hover:bg-gray-100'
        }`}
        onClick={() => selectItem(item.id)}
      >
        <FileIcon className="w-4 h-4" />
        <span>{item.name}</span>
      </div>
    );
  };

  return (
    <TreeContext.Provider value={{ selectedId, expandedItems, handleExpand, selectItem }}>
      <div className="w-full h-full overflow-auto p-2">
        {elements.map(item => renderItem(item))}
      </div>
    </TreeContext.Provider>
  );
};
