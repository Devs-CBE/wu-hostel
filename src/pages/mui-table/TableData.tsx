import * as React from 'react'

const people = [
  {
    name: 'Karthikraja B',
    complaints: 'Power Complaint from yesterday.',
    room: 'A5',
    building: 'Whatsup',
    mobile: '8870604611',
    email: 'karthikrajab11@gmail.com',
    remarks: 'Resolved',
    image:
      'https://scontent-tir2-1.xx.fbcdn.net/v/t1.6435-9/67308822_1154163544784555_1040607212168282112_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=kECxmcJioHIAX8kWbv7&_nc_ht=scontent-tir2-1.xx&oh=cd3b40c3b6166f714fd1e265eb52f62a&oe=61CC1A0F',
  },
  {
    name: 'Velmurugan',
    complaints: 'Water problem',
    room: 'A6',
    building: 'Whatsup',
    mobile: '121212121',
    email: 'Velmurugan@gmail.com',
    remarks: 'Unresolved',
    image: 'https://i.pinimg.com/originals/ea/69/dc/ea69dc6226e72a33f82d3add20b470df.jpg',
  },
  {
    name: 'Kavi',
    complaints: 'Cot needed',
    room: 'A7',
    building: 'Messenger',
    mobile: '233554543',
    email: 'kavi@gmail.com',
    remarks: 'Ongoing',
    image:
      'https://scontent-tir2-1.xx.fbcdn.net/v/t1.6435-9/77214868_1245910805609088_5399916867768811520_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=QSQwJaBCCyQAX_vDnCr&_nc_ht=scontent-tir2-1.xx&oh=c7bb163d96e968b6241b849b4266ee34&oe=61C9DAC7',
  },
  {
    name: 'Karthickeyan',
    complaints: '2 Lights needed',
    room: 'A8',
    building: 'Whatsup',
    mobile: '+91028274949',
    email: 'Karthickeyan@gmail.com',
    remarks: 'Unresolved',
    image: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/D34A/production/_112809045_kid.chair.jpg',
  },
  {
    name: 'Mohan',
    complaints: 'Water leaking in washroom',
    room: 'A9',
    building: 'Messenger',
    mobile: '09493729433',
    email: 'Mohan@gmail.com',
    remarks: 'Ongoing',
    image:
      'https://e7.pngegg.com/pngimages/194/1022/png-clipart-mr-peabody-penny-peterson-animated-film-dreamworks-animation-cartoon-mr-peabody-sherman-comics-boy.png',
  },
]

export default function ComplaintTable() {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 w-full">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-lg"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-lg"
                  >
                    Complaints
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-lg"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-lg"
                  >
                    Room
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-lg"
                  >
                    Buildings
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {people.map((person) => (
                  <tr key={person.email}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{person.name}</div>
                          <div className="text-sm text-gray-500">{person.email}</div>
                          <div className="text-sm text-gray-500">{person.mobile}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{person.complaints}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-pink-900 text-white">
                        {person.remarks}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {person.room}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {person.building}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
