export {allowEdits};

function allowEdits(element, e)
{
    element.disabled = false;
    element.readOnly = false;
    element.style = "pointer-events: unset;";
}