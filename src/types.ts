/**
 * A utility type that enumerates
 */
type Enumerate<
  N extends number,
  Acc extends number[] = [],
> = Acc["length"] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc["length"]]>;

/**
 * A utility type that returns a type union of all numbers in the range of the
 * numbers provided.
 *
 * @example
 *
 * Range<1, 6> returns 1 | 2 | 3 | 4 | 5
 */
type Range<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>;

export type ZeroToSixty = Range<0, 60>;
export type HoursRange = Range<0, 24>;
export type DaysOfMonthRange = Range<1, 32>;
export type MonthsRange = Range<1, 13>;
export type DaysOfWeekRange = Range<1, 8>;

export type GetIncrement<X extends number, Y extends number> = `${X}/${Y}`;
export type GetRange<X extends number, Y extends number> = `${X}-${Y}`;

export type Fields = Readonly<{
  seconds: ZeroToSixty[];
  minutes: ZeroToSixty[];
  hours: HoursRange[];
  daysOfMonth: DaysOfMonthRange[];
  months: MonthsRange[];
  daysOfWeek: DaysOfWeekRange[];
}>;
export type FieldName = keyof Fields;

export type UnitConfig = {
  name: FieldName;
  min: number;
  max: number;
};
