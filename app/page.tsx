import DiscountHeader from "./Components/DiscountHeader/DiscountHeader";

export default function Home() {
  return (
    <div>
      <DiscountHeader text="خصومات بنسبة 20% على الكورسات"
        startDate="2024-10-20T00:00:00" 
        endDate="2024-10-24T18:55:10"   />
    </div>
  );
}
