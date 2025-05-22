import DateEntryForm from "components/DateEntryForm";
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { DateEntryFormData } from "types/dateEntryFormData";

const defaultData: DateEntryFormData = {
    flareup: "no",
    severity: "",
    diet: [],
    exerciseIntensity: "none",
    exerciseHours: 0,
    screentime: 0,
    sleep: 8,
    weather: [],
    stressLevel: "none",
    caffeine: "none",
    alcohol: "none",
    tobacco: "none",
    notes: "",
}


describe("entry form", () => {

    it("renders all form inputs", () => {
        const { getByText } = render(
            <DateEntryForm date="2025-05-22" onSubmit={jest.fn()} initialValues={defaultData} />
        );

        expect(getByText("Entry for 2025-05-22")).toBeTruthy();
        expect(getByText("Flare-up:")).toBeTruthy();
        expect(getByText("Severity:")).toBeTruthy();
        expect(getByText("Diet:")).toBeTruthy();
        expect(getByText("Exercise Intensity:")).toBeTruthy();
        expect(getByText("Exercise Hours: 0")).toBeTruthy();
        expect(getByText("Screen Time: 0")).toBeTruthy();
        expect(getByText("Sleep: 8")).toBeTruthy();
        expect(getByText("Weather:")).toBeTruthy();
        expect(getByText("Stress Level:")).toBeTruthy();
        expect(getByText("Caffeine:")).toBeTruthy();
        expect(getByText("Alcohol:")).toBeTruthy();
        expect(getByText("Tobacco:")).toBeTruthy();
    });

    it('loads initialValues correctly', () => {
        const initialValues = {
            flareup: "yes",
            severity: "3",
            diet: ["high sugar", "skipped meal"],
            exerciseHours: 2,
            screentime: 4,
            sleep: 7,
            weather: ["sunny", "humid"],
            stressLevel: "medium",
            caffeine: "low",
            alcohol: "none",
            tobacco: "high"
        };

        const { getByText, getByTestId } = render(
            <DateEntryForm date="2025-05-22" onSubmit={jest.fn()} initialValues={initialValues} />
        );

        expect(getByText("Entry for 2025-05-22")).toBeTruthy();
        expect(getByText("Exercise Hours: 2")).toBeTruthy();
        expect(getByText("Screen Time: 4")).toBeTruthy();
        expect(getByText("Sleep: 7")).toBeTruthy();
        expect(getByTestId('chip-yes-selected')).toBeTruthy();
        expect(getByTestId('chip-3-selected')).toBeTruthy();
        expect(getByTestId('chip-high sugar-selected')).toBeTruthy();
        expect(getByTestId('chip-skipped meal-selected')).toBeTruthy();
        expect(getByTestId('chip-sunny-selected')).toBeTruthy();
        expect(getByTestId('chip-humid-selected')).toBeTruthy();
        expect(getByTestId('chip-medium-selected')).toBeTruthy();
        expect(getByTestId('chip-low-selected')).toBeTruthy();
        expect(getByTestId('chip-none-selected')).toBeTruthy();
        expect(getByTestId('chip-high-selected')).toBeTruthy();
    });

    it("submits form data when Save Entry is pressed", async () => {
        const onSubmitMock = jest.fn();
        const { getByText } = render(
            <DateEntryForm date="2025-05-22" onSubmit={onSubmitMock} initialValues={defaultData} />
        );

        fireEvent.press(getByText("yes"));
        fireEvent.press(getByText("3"));
        fireEvent.press(getByText("Save Entry"));

        await waitFor(() => {
            expect(onSubmitMock).toHaveBeenCalled();
            // react-hook-form onSubmit has a default second argument, we only care about the first
            const [data] = onSubmitMock.mock.calls[0];
            expect(data).toEqual(expect.objectContaining({
                flareup: "yes",
                severity: "3"
            }));
        });
    });

})
