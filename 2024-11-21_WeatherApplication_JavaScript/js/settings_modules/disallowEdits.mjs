export {disallowEdits};

function disallowEdits(element)
{
    element.disabled = true;
    element.readOnly = true;
    element.style = "pointer-events: none;";

}