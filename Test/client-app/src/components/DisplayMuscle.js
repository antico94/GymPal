import React, {Component, useState} from "react";
import $ from "jquery";

export class DisplayMuscle extends Component {
    
    componentDidMount() {
        document.getElementById("sex").style.visibility = "visible";
        document.querySelectorAll(".muscle-groups svg g g[id]").forEach(function (group) {

            // For the hover
            group.addEventListener('mouseover', function (el) {
                let id = el.path[1].id.toLowerCase()
                if (!id) id = el.path[2].id.toLowerCase()
                let label = document.querySelectorAll("label[for=" + id + "]")[0]
                if (label.classList)
                    label.classList.add("hover")
                else
                    label.className += ' ' + "hover"
            })
            group.addEventListener('mouseout', function (el) {
                let id = el.path[1].id.toLowerCase()
                if (!id) id = el.path[2].id.toLowerCase()
                let label = document.querySelectorAll("label[for=" + id + "]")[0]
                let clss = "hover"
                if (label.classList)
                    label.classList.remove(clss)
                else
                    label.className = label.className.replace(new RegExp('(^|\\b)' + clss.split(' ').join('|') + '(\\b|$)', 'gi'), ' ')
            })
            // For the click
            group.addEventListener('click', function (el) {
                let id = el.path[1].id.toLowerCase()
                if (!id) id = el.path[2].id.toLowerCase()
                let input = document.getElementById(id)
                input.checked = !input.checked
            });
        })

        let button = document.getElementById('train-button');
        button.addEventListener('click', function () {
            GetSelectedData()
        })

        function SendData(list) {

            // $.ajax({
            //     url: "/Exercise/Test",
            //     type: "POST",
            //     data: JSON.stringify(list),
            //     success: function (mydata) {
            //         window.location.href = "/Exercise/Test"
            //     },
            //     error: function (error) {
            //         // console.log(error)
            //         alert('failed, error ' + error.status);
            //     }
            // });
            console.log(list)

        }
        
        function convertNamesIntoIds(list){
            const muscleDictionary = {
                'biceps' : 1,
                'deltoids': 2,
                'forearms':3,
                'triceps':4,
                'trapezius':5,
                'lats':6,
                'abs':7,
                'obliques':8,
                'pectorals':9,
                'adductors':10,
                'calves':11,
                'hamstrings':12,
                'glutes':13,
                'quads':14
            }
            let convertedList = [];
            list.forEach(el => convertedList.push(muscleDictionary[el]))
            console.log(convertedList)
            return list
        }

        function GetSelectedData() {
            const query = $('input[type=checkbox]:checked').map(function () {
                return this.id;
            }).get();
            let converted = convertNamesIntoIds(query)
            SendData(converted)
        }
    }

    render() {

        return (

            <div>
                <h3 className="d-flex justify-content-center m-3">Display Muscle</h3>
            </div>)
    }
}
