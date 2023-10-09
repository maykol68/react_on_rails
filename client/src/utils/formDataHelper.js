export function objectToFormData(
    obj,
    namespace = null,
    formData = new FormData()
) {
    for (let propertyName in obj) {
        if (isValidProperty(obj, propertyName)) {
            const formkey = getFormKey(namespace, propertyName);
            // post[key] = value;
            // post[title] = "Helllo World";
            appendToFormData(formData, formkey, obj[propertyName]);
        }
    }           
    return formData;
}

function isValidProperty(obj, propertyName) {
    return (
        Object.prototype.hasOwnProperty.call(obj, propertyName) && 
        obj[propertyName] !== undefined &&
        obj[propertyName] !== null &&
        obj[propertyName] !== ""

    )
}
/*In the case where we have a post with a title or a body
we can't to append the data to the formData object
So the namespace is the post and the propertyName is the title or body.
*/
function getFormKey (namespace, propertyName) {
    return namespace ? `${namespace}[${propertyName}]` : propertyName;
}
function appendToFormData(formData, formKey, value) {
    // Date || Object != file || something else
    if (value instanceof Date) {
        appendAsDate(formData, formKey, value);
    } else if (isObjectButNotFile(value)) {
        objectToFormData(value, formkey, formData)
    }
    }
}