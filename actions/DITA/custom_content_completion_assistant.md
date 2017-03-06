#### ID
custom.file.content.completion

#### Name
Link to specific file from content completion assistant

#### Description
Adds a command to the content completion assistant to link to a specific file (relative to the project)

#### XPath
N/A

#### Operation
JSOperation

#### Arguments
function doOperation(){
 Packages.ro.sync.ecss.dita.DITAAccess.insertContentReference(authorAccess, new Packages.java.net.URL("${pdu}/reuse/en/my_variables_file.dita"), true);
}

#### Comments
Especially useful when using several resource files


