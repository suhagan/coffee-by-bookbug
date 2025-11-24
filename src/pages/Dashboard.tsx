import { Header } from "../components/Header";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { CoffeeList } from "../components/CoffeeList";

export const Dashboard = () => {
  return (
    <>
    <div className="w-full min-h-screen">
      {/* center CONTENT only, not background */}
      <div className="w-full max-w-7xl mx-auto px-6 py-8">
        <Header />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card title="Orders" icon="📦" description="Total coffee orders today." />
          <Card title="Customers" icon="👤" description="Active buyers this week." />
          <Card title="Rating" icon="⭐" description="Customer satisfaction score." />
        </div>

        <CoffeeList />

          <div className="flex gap-4 mt-8">
            <Button text="Primary" variant="primary" />
            <Button text="Secondary" variant="secondary" />
            <Button text="Delete" variant="danger" />
          </div>
        </div>
      </div>
    </>
  );
};
