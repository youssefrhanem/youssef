import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Calendar, Users, TrendingUp } from "lucide-react";

interface AnalyticCard {
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
}

interface AnalyticsProps {
  cards?: AnalyticCard[];
}

const defaultCards: AnalyticCard[] = [
  {
    title: "Total Patients",
    value: "2,420",
    change: 12,
    icon: <Users className="h-4 w-4" />,
  },
  {
    title: "Monthly Appointments",
    value: "145",
    change: 8,
    icon: <Calendar className="h-4 w-4" />,
  },
  {
    title: "Revenue",
    value: "$32,450",
    change: 15,
    icon: <TrendingUp className="h-4 w-4" />,
  },
  {
    title: "Treatment Success Rate",
    value: "95%",
    change: 2,
    icon: <BarChart className="h-4 w-4" />,
  },
];

const Analytics: React.FC<AnalyticsProps> = ({ cards = defaultCards }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              {card.icon}
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{card.value}</div>
            <p className="text-xs text-muted-foreground">
              <span
                className={card.change > 0 ? "text-green-600" : "text-red-600"}
              >
                {card.change > 0 ? "+" : ""}
                {card.change}%
              </span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Analytics;
