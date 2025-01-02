// "use client";
// import { cn } from "@/lib/utils";
// import { AnimatePresence, motion } from "framer-motion";
// import Link from "next/link";
// import { useState } from "react";
// import { useTheme } from "next-themes";

// export const HoverEffect = ({
//   items,
//   className
// }) => {
//   let [hoveredIndex, setHoveredIndex] = useState(null);

//   return (
//     (<div
//       className={cn("grid md:grid-cols-3  lg:grid-cols-3", className)}>
//       {items.map((item, idx) => (
//         <Link
//           href={`mailto:${item?.email}`}
//           key={item?.email}
//           className="relative group  block p-2 h-full w-full"
//           onMouseEnter={() => setHoveredIndex(idx)}
//           onMouseLeave={() => setHoveredIndex(null)}>
//           <AnimatePresence>
//             {hoveredIndex === idx && (
//               <motion.span
//                 className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
//                 layoutId="hoverBackground"
//                 initial={{ opacity: 0 }}
//                 animate={{
//                   opacity: 1,
//                   transition: { duration: 0.15 },
//                 }}
//                 exit={{
//                   opacity: 0,
//                   transition: { duration: 0.15, delay: 0.2 },
//                 }} />
//             )}
//           </AnimatePresence>
//           <Card>
//             <CardTitle>{item.name}</CardTitle>
//             <CardDescription>{item.description}</CardDescription>
//             <div className="mt-4 text-sm text-zinc-400">
//               <p>Mobile: {item.mobile}</p>
//               <p>WhatsApp: {item.whatsapp}</p>
//               <p>Email: {item.email}</p>
//             </div>
//           </Card>
//         </Link>
//       ))}
//     </div>)
//   );
// };

// export const Card = ({
//   className,
//   children
// }) => {
//   return (
//     (<div
//       className={cn(
//         "rounded-2xl h-full w-full p-4 overflow-hidden bg-white border border-transparent border-black dark:bg-black dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
//         className
//       )}>
//       <div className="relative z-50">
//         <div className="p-4">{children}</div>
//       </div>
//     </div>)
//   );
// };
// export const CardTitle = ({
//   className,
//   children
// }) => {
//   return (
//     (<h4 className={cn("text-black dark:text-zinc-100 font-bold tracking-wide mt-4", className)}>
//       {children}
//     </h4>)
//   );
// };
// export const CardDescription = ({
//   className,
//   children
// }) => {
//   return (
//     (<p
//       className={cn("mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm", className)}>
//       {children}
//     </p>)
//   );
// };
"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const HoverEffect = ({ items, setItems, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedData, setEditedData] = useState({});

  const handleEdit = (index) => {
    setEditedData(items[index]);
    setEditingIndex(index);
  };

  const saveChanges = () => {
    const updatedItems = [...items];
    updatedItems[editingIndex] = editedData;
    setItems(updatedItems);
    setEditingIndex(null);
  };

  return (
    <div className={cn("grid md:grid-cols-3 lg:grid-cols-3 gap-6", className)}>
      {items.map((item, idx) => (
        <div
          key={item.email}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-600/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.1, delay: 0.15 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <div className="flex justify-between items-center">
              <CardTitle>{item.name}</CardTitle>
              <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className = "text-black border dark:text-white dark:border-white border-black"
                onClick={() => handleEdit(idx)}
              >
                Edit
              </Button>
              <Button variant="destructive" size="sm">Delete</Button>
              </div>
            </div>
            <CardDescription>{item.description}</CardDescription>
            <div className="mt-4 text-sm text-zinc-400">
              <p>Mobile: {item.mobile}</p>
              <p>WhatsApp: {item.whatsapp}</p>
              <p>Email: {item.email}</p>
            </div>
          </Card>
        </div>
      ))}

      {editingIndex !== null && (
        <Dialog open={editingIndex !== null} onOpenChange={() => setEditingIndex(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Data</DialogTitle>
              <DialogDescription>
                Make changes to the data and click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <form
              className="grid gap-4 px-4"
              onSubmit={(e) => {
                e.preventDefault();
                saveChanges();
              }}
            >
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={editedData.name}
                  onChange={(e) =>{
                    setEditedData({ ...editedData, name: e.target.value });
                    console.log("Edited data :",editedData)
                  }
                  }
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  value={editedData.description}
                  onChange={(e) =>
                    setEditedData({
                      ...editedData,
                      description: e.target.value,
                    })
                  }
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="mobile">Mobile</Label>
                <Input
                  id="mobile"
                  value={editedData.mobile}
                  onChange={(e) =>
                    setEditedData({ ...editedData, mobile: e.target.value })
                  }
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="whatsapp">WhatsApp</Label>
                <Input
                  id="whatsapp"
                  value={editedData.whatsapp}
                  onChange={(e) =>
                    setEditedData({
                      ...editedData,
                      whatsapp: e.target.value,
                    })
                  }
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  value={editedData.email}
                  onChange={(e) =>
                    setEditedData({ ...editedData, email: e.target.value })
                  }
                />
              </div>
              <div className="flex justify-end gap-4">
                <Button variant="outline" onClick={() => setEditingIndex(null)}>
                  Cancel
                </Button>
                <Button type="submit">Save changes</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-gray-100 border  border-solid border-black dark:bg-black dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h4
      className={cn(
        "text-black dark:text-zinc-100 font-bold tracking-wide mt-4",
        className
      )}
    >
      {children}
    </h4>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
