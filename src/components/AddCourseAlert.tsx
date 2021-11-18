import Swal from "sweetalert2";



export default function AddCourseAlert(): void {

    Swal.fire({
        title: "Enter Course Information",
        html: `<input type="text" id="courseTitle" class="Swal2-input" placeholder="Course Title">
        <input type="number" id="courseCredits" class="Swal2-input" placeholder="Course Credits">
        <input type="text" id="courseDescrip" class="Swal2-input" placeholder="Course Description">`,
        confirmButtonText: "Save",
        cancelButtonText: "Cancel",
        focusConfirm: false,
        allowOutsideClick: true,
        allowEscapeKey: true,
        showCancelButton: true,
        preConfirm: () => {
            const title: string = Swal.getPopup().querySelector("#courseTitle").value;
            const credits: number = Swal.getPopup()?.querySelector("#courseCredits").value;
            const description: string = Swal.getPopup().querySelector("#courseDescrip").value;
            if (!title) {
                Swal.showValidationMessage("Please enter course name");
            }
            if (credits <= 0) {
                Swal.showValidationMessage("Please enter a valid number of credits");
            }
            if (!description) {
                Swal.showValidationMessage("Please enter course description");
            }
            return { title: title, credits: credits, description: description };
        }
    }).then((result) => {
        Swal.fire(`
          Course Name: ${result.value.title}
          Course Credits: ${result.value.credits}
          Course Description: ${result.value.description}
        `.trim());
    });

}





















//     Swal.fire({
//         title: "Enter Your Course Name",
//         input: "text",
//         inputAttributes: {
//             autocapitalize: "off"
//         },
//         inputValue: input,
//         showCancelButton: true,
//         confirmButtonText: "Look up",
//         showLoaderOnConfirm: true,
//         allowOutsideClick: () => !Swal.isLoading()
//     }).then((result) => {
//         if (result.isConfirmed) {
//             Swal.fire({
//                 title: input,
//             });
//         }
//     });
// }


// Swal.fire({
//     title: "Do you want to save the changes?",
//     showDenyButton: true,
//     showCancelButton: true,
//     confirmButtonText: "Save",
//     denyButtonText: "Don"t save",
// }).then((result) => {
//     /* Read more about isConfirmed, isDenied below */
//     if (result.isConfirmed) {
//         Swal.fire("Saved!", "", "success");
//     } else if (result.isDenied) {
//         Swal.fire("Changes are not saved", "", "info");
//     }
// });


