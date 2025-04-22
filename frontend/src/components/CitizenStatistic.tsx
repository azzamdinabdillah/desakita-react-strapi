import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "A", value: 400 },
  { name: "B", value: 300 },
  { name: "C", value: 300 },
  { name: "D", value: 500 },
];

const COLORS = ["#34613A", "#8EBD55", "#FA7139", "#FBAD48"];

export default function CitizenStatistic() {
  // Hitung total (misalnya ingin menampilkan total di tengah)
  const total = data.reduce((sum, entry) => sum + entry.value, 0);

  return (
    <div className="w-full relative h-[200px] lg:h-[288px]">
      <ResponsiveContainer height="100%" aspect={1 / 1}>
        <PieChart margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
          <Pie
            data={data}
            // cx="50%"
            // cy="50%"
            innerRadius="70%"
            outerRadius="100%"
            dataKey="value"
            paddingAngle={3}
            cornerRadius={5}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                className="rounded-2xl"
              />
            ))}
          </Pie>
          <Tooltip />
          {/* <foreignObject x="25%" y="25%" width="50%" height="50%">
            <div className="flex flex-col items-center justify-center h-full">
              <h1 className="text-3xl font-semibold">{total}</h1>
              <p className="text-14 text-secondary-text-color mt-1 font-medium">
                Jumlah Penduduk
              </p>
            </div>
          </foreignObject> */}
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
        <h1 className="text-2xl lg:text-3xl font-semibold">{total}</h1>
        <p className="text-xs lg:text-sm text-secondary-text-color mt-1 font-medium">
          Jumlah Penduduk
        </p>
      </div>
    </div>
  );
}
