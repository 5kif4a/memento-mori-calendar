import React, { Fragment } from "react";
import "./calendar.css";

interface ICalendarProps {
    birthdate: string;
    age: number;
}

const weeksInYear = 52;

const Calendar: React.FC<ICalendarProps> = ({ birthdate, age }) => {
    const birthDate = new Date(birthdate);
    const currentDate = new Date();
    const livedWeeks = Math.floor(
        (currentDate.getTime() - birthDate.getTime()) /
            (1000 * 60 * 60 * 24 * 7),
    );

    return (
        <div className="calendar">
            {Array.from({ length: age }).map((_, yearIndex) => (
                <div key={yearIndex} className="year">
                    {Array.from({ length: weeksInYear }).map((_, weekIndex) => {
                        const index = yearIndex * weeksInYear + weekIndex;
                        return (
                            <Fragment key={index}>
                                <div
                                    className={
                                        index < livedWeeks
                                            ? "week lived"
                                            : "week"
                                    }
                                />
                            </Fragment>
                        );
                    })}
                    {(yearIndex + 1) % 5 === 0 && (
                        <p className="year-label">{yearIndex + 1}</p>
                    )}
                </div>
            ))}
        </div>
    );
};

export { Calendar };
