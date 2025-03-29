import { createLazyFileRoute } from "@tanstack/react-router";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { useQuery } from "@tanstack/react-query";
import { axiosClient } from "@/lib/axios";
import { useState } from "react";

const days = [
  "Lunedì",
  "Martedì",
  "Mercoledì",
  "Giovedì",
  "Venerdì",
  "Sabato",
  "Domenica",
];

const chartConfig = {
  me: {
    label: "Me",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export type DashboardData = {
  daily: number;
  week: number[];
};

export const Route = createLazyFileRoute("/_layout/dashboard")({
  component: Dashboard,
});

function Dashboard() {
  const [mode, setMode] = useState(1);
  const dashboardQuery = useQuery({
    queryKey: ["dashboard", mode],
    queryFn: async () =>
      axiosClient
        .get<DashboardData>(`/02_dashboard.php?mode=${mode}`)
        .then((res) => res.data),
  });

  return (
    <div className="p-3 w-full flex flex-col gap-3">
      <div className="flex flex-col lg:flex-row gap-3">
        <Card className="w-full lg:w-1/2">
          <CardHeader>
            <CardTitle className="text-3xl">
              <span className="text-primary">
                {Math.round((dashboardQuery.data?.daily ?? 0) / 120)} KM
              </span>{" "}
              in macchina 🚗
            </CardTitle>
            <CardDescription>
              Il consumo tangibile dell'ultimo giorno.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="w-full lg:w-1/2">
          <CardHeader>
            <CardTitle className="text-3xl">
              <span className="text-primary">
                {dashboardQuery.data?.daily ?? 0} g
              </span>{" "}
              di CO2 🌍
            </CardTitle>
            <CardDescription>
              Il consumo reale dell'ultimo giorno.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      <Separator className="my-2" />

      <Select
        value={mode.toString()}
        onValueChange={(value) => setMode(parseInt(value))}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Ultimo giorno" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Settimana corrente</SelectItem>
          <SelectItem value="2">Settimana precendente</SelectItem>
        </SelectContent>
      </Select>

      <div className="flex flex-col lg:flex-row gap-3">
        <Card className="w-full lg:w-1/2">
          <CardHeader>
            <CardTitle className="text-3xl">Storico consumo 📜</CardTitle>
            <CardDescription>Ecco il tuo storico di consumo.</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={chartConfig}
              className="max-h-[600px] w-full"
            >
              <BarChart
                accessibilityLayer
                data={
                  dashboardQuery.data?.week
                    ? [...Array(7)].map((_, index) => ({
                        day: days[index],
                        me: dashboardQuery.data.week[index] || 0,
                      }))
                    : Array(7)
                        .fill(0)
                        .map((_, index) => ({
                          day: days[index],
                          me: 0,
                        }))
                }
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="day"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <YAxis
                  dataKey="me"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value}
                />
                <Bar dataKey="me" fill="var(--color-me)" radius={4} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="w-full lg:w-1/2">
          <CardHeader>
            <CardTitle className="text-3xl">Consiglio 💡</CardTitle>
            <CardDescription>Ophelia ti consiglia...</CardDescription>
          </CardHeader>
          <CardContent>
            <img
              src="felice.png"
              alt="Ophelia"
              className="w-1/2 mx-auto"
              draggable={false}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
