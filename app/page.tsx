import DiscountHeader from "./Components/DiscountHeader/DiscountHeader";

export default function Home() {
  return (
    <div>
      <DiscountHeader text="خصومات بنسبة 20% على الكورسات"
        startDate="2024-10-20" 
        endDate="2024-10-30"   />
    </div>
  );
}
