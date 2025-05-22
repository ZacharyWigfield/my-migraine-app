import { render, fireEvent } from "@testing-library/react-native";
import { SingleSelectChips } from "components/SingleSelectChips";

describe("SingleSelectChips", () => {
    it("renders all chip options", () => {
        const { getByText } = render(
            <SingleSelectChips options={["A", "B", "C"]} value={""} onChange={() => { }} />
        );

        expect(getByText("A")).toBeTruthy();
        expect(getByText("B")).toBeTruthy();
        expect(getByText("C")).toBeTruthy();
    });

    it("selects chip correctly", () => {
        const onChangeMock = jest.fn();
        const { getByText } = render(
            <SingleSelectChips options={["Apple", "Banana"]} value={"Apple"} onChange={onChangeMock} />
        );

        fireEvent.press(getByText("Banana"));
        expect(onChangeMock).toHaveBeenCalledWith("Banana");
    });

});