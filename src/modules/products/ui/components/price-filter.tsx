import { ChangeEvent } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Props {
    minPrice?: string | null;
    maxPrice?: string | null;
    onMinPriceChange: (value: string) => void;
    onMaxPriceChange: (value: string) => void; 
}

// This function formats a string as a currency value by removing non-numeric characters and limiting decimal places to 2.
export const formateAsCurrency = (value: string) => {
    const numericValue = value.replace(/[^0-9.]/g, ""); // Remove non-numeric characters

    const parts = numericValue.split(".");
    const formattedValue = 
        parts[0] + (parts.length > 1 ? "." + parts[1]?.slice(0,2) : "");
    
    if(!formattedValue) return "";

    const numberValue = parseFloat(formattedValue);
    if(isNaN(numberValue)) return "";

    // This code formats a number as a US dollar currency string, with up to 2 decimal places. For example, if numberValue is 1234.5678, it will return the string "$1,234.57".
    return new Intl.NumberFormat("en-US",{
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    }).format(numberValue);
};

export const PriceFilter = ({ minPrice, maxPrice, onMinPriceChange, onMaxPriceChange }:Props) => {

    const handleMinPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
        // Get the raw input value and extract only numeric values
        const numericValue = e.target.value.replace(/[^0-9.]/g, "");
        onMinPriceChange(numericValue) 
    };

    const handleMaxPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
        // Get the raw input value and extract only numeric values
        const numericValue = e.target.value.replace(/[^0-9.]/g, "");
        onMaxPriceChange(numericValue) 
    };

    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
                <Label className="font-medium text-base">
                    Minimum price
                </Label>
                <Input 
                    type="text"
                    placeholder="$0"
                    value={minPrice ? formateAsCurrency(minPrice) : ""}
                    onChange={handleMinPriceChange}
                />
            </div>
            <div className="flex flex-col gap-2">
                <Label className="font-medium text-base">
                    Maximum price
                </Label>
                <Input 
                    type="text"
                    placeholder="&infin;"
                    value={maxPrice ? formateAsCurrency(maxPrice) : ""}
                    onChange={handleMaxPriceChange}
                />
            </div>
        </div>
    )
}