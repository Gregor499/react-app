import {fireEvent, render, screen, waitFor} from "@testing-library/react"
import axios from "axios";
import Gallery from "./Gallery";

/*
test("that input values are rendered", async () => {

    jest.spyOn(axios, "post").mockImplementation((url: string, data: any) => {
        expect(url).toEqual("http://localhost:8080/api/react")
        expect(data).toEqual({task: "Testaufgabe", description: "Testbeschreibung", status: "OPEN"})
        return Promise.resolve({});
    });

    const onGetComponents = jest.fn(() => {
    })

    render(<Gallery onGetComponents={onGetComponents}/>)

    const taskField = screen.getByTestId("task-field")
    fireEvent.change(taskField, {target: {value: "Einkaufen"}})

    const descriptionField = screen.getByTestId('description-field')
    fireEvent.change(descriptionField, {target: {value: "Die Beschreibung"}})

    screen.getByTestId("submit-button").click()

    await waitFor(() => {
        expect((screen.getByTestId("task-field") as HTMLInputElement).value).toEqual("")
        expect((screen.getByTestId("description-field") as HTMLInputElement).value).toEqual("")
        expect(onGetComponents).toHaveBeenCalledTimes(1);
    })
})
*/
