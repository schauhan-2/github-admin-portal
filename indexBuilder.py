import csv

htmlFile = open('index.html','w', newline='')
csvFile = open('output.csv','r')
templateFile = open('template.html','r')

for line in templateFile:
    htmlFile.write(line)

htmlFile.write('''   <table id="myTable">
        <tr class="header">
          <th style="width:60%;">Repo Name</th>
          <th style="width:40%;">User</th>
          <th style="width:40%;">Role</th>
        </tr>''')

for line in csvFile:
    row = list(line.split(','))
    htmlFile.write(f'''   <tr>
          <td>{row[0]}</td>
          <td>{row[1]}</td>
          <td>{row[2]}</td>
        </tr>''')
    
htmlFile.write('''</table>
  </body>
</html>''')

htmlFile.close()
templateFile.close()
csvFile.close()

