import { render, fireEvent } from "@testing-library/react-native";
import { MultiSelectChips } from "../MultiSelectChips"; // adjust path

describe("MultiSelectChips", () => {
    it("renders all chip options", () => {
        const { getByText } = render(
            <MultiSelectChips options={["A", "B", "C"]} value={[]} onChange={() => { }} />
        );

        expect(getByText("A")).toBeTruthy();
        expect(getByText("B")).toBeTruthy();
        expect(getByText("C")).toBeTruthy();
    });

    it("selects chips correctly", () => {
        const onChangeMock = jest.fn();
        const { getByText } = render(
            <MultiSelectChips options={["Apple", "Banana"]} value={["Apple"]} onChange={onChangeMock} />
        );

        fireEvent.press(getByText("Banana"));
        expect(onChangeMock).toHaveBeenCalledWith(["Apple", "Banana"]);
    });

     it("deselects chips correctly", () => {
        const onChangeMock = jest.fn();
        const { getByText } = render(
            <MultiSelectChips options={["Apple", "Banana"]} value={["Apple", "Banana"]} onChange={onChangeMock} />
        );

        fireEvent.press(getByText("Apple"));
        expect(onChangeMock).toHaveBeenCalledWith(["Banana"]);
    });
});