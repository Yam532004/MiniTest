function Scores({courseName, courseResults}) {
  return (
    <main className="scores-container">
      <div class="scores">
        <h1>{courseName}</h1>
        <table>
          <thead>
            <tr>
              <th>First name</th>
              <th>Last name</th>
              <th>Score</th>
            </tr>
          </thead>

          <tbody>
            {courseResults.map((data) => (
              <tr>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td className={data.score>= 50?"": "warning"}>{data.score}</td>
                
              </tr>
            ))}
          </tbody>

          {/* <tbody>
              <tr>
                <td>First name 1 </td>
                <td>Last name 1 </td>
                <td>55</td>
              </tr>
              <tr>
                <td>First name 2 </td>
                <td>Last name 2 </td>
                <td>45</td>
              </tr>
            </tbody> */}
        </table>
      </div>
    </main>
  );
}
export default Scores;