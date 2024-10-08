const pathToComponent = input => {
    const output = input.split("/").filter(name => !name.includes(".")).map(
        path => path.split("-").map(
            subPath => subPath[0].toUpperCase()+subPath.slice(1)).join("")).join("::")
        return {input,output}
}

const input = "frontend/app/components/module-tickets/list/template.hbs";

console.log(">pathToComponent",pathToComponent(input))

const componentToPath = input => {
    const output = input.split("::").map(
        part => part.replace(/([A-Z])/g, "-$1").toLowerCase().slice(1) // Add hyphen before uppercase and convert to lowercase
    ).join("/");
    return {input, output};
};

// Example usage:
const input1 = "Frontend::App::UiComponents::ModuleTickets::List";
console.log(">componentToPath",componentToPath(input1));