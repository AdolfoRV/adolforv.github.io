import { createContext, useContext, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

const TabsContext = createContext(null);

const Tabs = ({ defaultValue, value, onValueChange, className, children, ...props }) => {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const isControlled = value !== undefined;
  const activeValue = isControlled ? value : uncontrolledValue;

  const contextValue = useMemo(
    () => ({
      value: activeValue,
      setValue: (nextValue) => {
        if (!isControlled) {
          setUncontrolledValue(nextValue);
        }
        onValueChange?.(nextValue);
      },
    }),
    [activeValue, isControlled, onValueChange]
  );

  return (
    <TabsContext.Provider value={contextValue}>
      <div className={className} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

const TabsList = ({ className, ...props }) => (
  <div
    role="tablist"
    className={cn(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      className,
    )}
    {...props}
  />
);

const TabsTrigger = ({ className, value, ...props }) => {
  const context = useContext(TabsContext);
  const selected = context?.value === value;

  return (
    <button
      type="button"
      role="tab"
      aria-selected={selected}
      data-state={selected ? "active" : "inactive"}
      onClick={() => context?.setValue(value)}
      className={cn(
        "inline-flex flex-1 items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
        className
      )}
      {...props}
    />
  );
};

const TabsContent = ({ className, value, children, ...props }) => {
  const context = useContext(TabsContext);
  const selected = context?.value === value;

  if (!selected) {
    return null;
  }

  return (
    <div
      role="tabpanel"
      className={cn(
        "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export { Tabs, TabsList, TabsTrigger, TabsContent };