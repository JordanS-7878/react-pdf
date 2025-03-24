import { Text, View } from "@react-pdf/renderer";
import { styles } from "./PdfViewer";
import dayjs from "dayjs";

const data = [
	{
		role: "Project Manager",
		employee: "John Doe",
		days: [
			{ date: "2025-02-01", approved: 1 },
			{ date: "2025-02-02", approved: 0.75 },
			{ date: "2025-02-03", approved: 1 },
			{ date: "2025-02-04", approved: 1 },
			{ date: "2025-02-05", approved: 1 },
			{ date: "2025-02-06", approved: 1 },
			{ date: "2025-02-07", approved: 1 },
			{ date: "2025-02-08", approved: 1 },
			{ date: "2025-02-09", approved: 1 },
			{ date: "2025-02-10", approved: 1 },
			{ date: "2025-02-11", approved: 1 },
			{ date: "2025-02-12", approved: 0.75 },
		],
		total_days: 10.75,
	},
	{
		role: "Drilling Engineer",
		employee: "Jane Doe",
		days: [
			{ date: "2025-02-01", approved: 1 },
			{ date: "2025-02-02", approved: 0.5 },
			{ date: "2025-02-03", approved: 0.75 },
			{ date: "2025-02-04", approved: 1 },
			{ date: "2025-02-10", approved: 0.75 },
			{ date: "2025-02-21", approved: 1 },
			{ date: "2025-02-25", approved: 0.25 },
			{ date: "2025-02-26", approved: 1 },
		],
		total_days: 12.5,
	},
	{
		role: "HSE Officer",
		employee: "Emily Rodriguez",
		days: [
			{ date: "2025-02-01", approved: 1 },
			{ date: "2025-02-02", approved: 1 },
			{ date: "2025-02-03", approved: 1 },
			{ date: "2025-02-04", approved: 0.75 },
			{ date: "2025-02-14", approved: 1 },
			{ date: "2025-02-17", approved: 1 },
			{ date: "2025-02-20", approved: 1 },
			{ date: "2025-02-21", approved: 0.25 },
			{ date: "2025-02-22", approved: 0.25 },
		],
		total_days: 9.25,
	},
	{
		role: "Mud Logger",
		employee: "Jessica Brown",
		days: [
			{ date: "2025-02-01", approved: 1 },
			{ date: "2025-02-02", approved: 1 },
			{ date: "2025-02-03", approved: 1 },
			{ date: "2025-02-04", approved: 1 },
			{ date: "2025-02-05", approved: 1 },
			{ date: "2025-02-06", approved: 1 },
			{ date: "2025-02-10", approved: 1 },
			{ date: "2025-02-12", approved: 0.5 },
		],
		total_days: 10.5,
	},
	{
		role: "Operations Manager",
		employee: "Laura Scott",
		days: [
			{ date: "2025-02-01", approved: 0.5 },
			{ date: "2025-02-02", approved: 1 },
			{ date: "2025-02-03", approved: 1 },
			{ date: "2025-02-04", approved: 1 },
			{ date: "2025-02-06", approved: 1 },
			{ date: "2025-02-13", approved: 0.5 },
			{ date: "2025-02-18", approved: 1 },
			{ date: "2025-02-23", approved: 0.25 },
		],
		total_days: 8.25,
	},
];

/**
 *
 * @param {string} month - Accepts month in string format. Better to include the year as well for better accuracy.
 * @returns
 */
function ApproveTimeSection({ month }: { month: string }) {
	const numberOfDays = dayjs(month).daysInMonth();

	return (
		<View style={styles.section}>
			<Text style={styles.tableHeader}>Approved Time</Text>
			<View style={[styles.tableRow, styles.tableFontSize]}>
				<Text
					style={[styles.tableCell, styles.tableBorderLeftBottom, { flex: 1 }]}
				>
					Role
				</Text>
				<Text
					style={[styles.tableCell, styles.tableBorderLeftBottom, { flex: 1 }]}
				>
					Employee
				</Text>
				<View style={[styles.tableColumn, { flex: 9 }]}>
					<Text
						style={[
							styles.tableCell,
							styles.tableBorderLeftBottom,
							{ textAlign: "center" },
						]}
					>
						Day
					</Text>
					<View style={styles.tableRow}>
						{/* loop days */}
						{Array.from({ length: numberOfDays }).map((_, index) => (
							<Text
								key={index}
								style={[
									styles.tableBorderLeftBottom,
									{
										flex: 1,
										textAlign: "center",
										padding: 2,
									},
								]}
							>
								{index + 1}
							</Text>
						))}
					</View>
				</View>
				<Text
					style={[
						styles.tableCell,
						styles.tableBorderLeftBottom,
						styles.tableBorderRight,
						{ flex: 1 },
					]}
				>
					Days
				</Text>
			</View>

			{data.map((item) => (
				<View
					style={[
						styles.tableRow,
						styles.tableFontSize,
						styles.tableBorderRight,
					]}
				>
					<Text
						style={[
							styles.tableCell,
							styles.tableBorderLeftBottom,
							{ flex: 1 },
						]}
					>
						{item.role}
					</Text>
					<Text
						style={[
							styles.tableCell,
							styles.tableBorderLeftBottom,
							{ flex: 1 },
						]}
					>
						{item.employee}
					</Text>
					<View style={[styles.tableRow, { flex: 9 }]}>
						{Array.from({ length: numberOfDays }).map((_, index) => {
							const day = item.days.find(
								(d) => dayjs(d.date).date() === index + 1
							);
							return (
								<Text
									key={index}
									style={[
										styles.tableBorderLeftBottom,
										{
											flex: 1,
											textAlign: "center",
											padding: 2,
										},
									]}
								>
									{day && day.approved}
								</Text>
							);
						})}
					</View>
					<Text
						style={[
							styles.tableCell,
							styles.tableBorderLeftBottom,
							{ flex: 1 },
						]}
					>
						{item.total_days}
					</Text>
				</View>
			))}
		</View>
	);
}

export default ApproveTimeSection;
