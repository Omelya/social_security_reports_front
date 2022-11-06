import populatedAreas from "../JSON/populatedAreas.json"

function getPlaceExecution (event) {
    let value = event.currentTarget.value,
        placeExecution = [],
        datalist = document.getElementById('place_execution');

    if (value.length > 2) {
        placeExecution = populatedAreas.filter(e => e.object_name.search(value.toUpperCase()) !== -1);

        placeExecution.forEach(item => {
            let region = item.region[0] + item.region.slice(1).toLowerCase(),
                community = item.community[0] + item.community.slice(1).toLowerCase(),
                typeSettlement = item.object_category[0].toLowerCase() + '.',
                settlementName = item.object_name[0] + item.object_name.slice(1).toLowerCase();

            if (community === settlementName) {
                community = '';
            }

            let place = region + ', ' + community + ', ' + typeSettlement + ' ' + settlementName;

            let option = document.createElement('option');

            option.value = place;
            datalist.appendChild(option);
        })
    }
}

export default function PlaceExecutionInput () {
    return (
        <div>
            <div className='flex flex-col p-1'>
                <label className='text-center'>Місце виконання</label>
                <input
                    type='text'
                    list='place_execution'
                    className='form-input'
                    name='place_execution'
                    onChange={e => getPlaceExecution(e)}
                />
                <datalist id='place_execution'>

                </datalist>
            </div>
        </div>
    )
}