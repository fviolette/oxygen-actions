#### ID
set.map.id.from.filename

#### Name
Set Map ID

#### Description
Set the @id attribute for map or map-specialized elements from the filename

#### XPath
N/A

#### Operation
ChangeAttributeOperation

#### Arguments
<dl>
    <dt>elementLocation</dt>
    <dd>ancestor-or-self::*[contains(@class,' map/map ')]</dd>
    <dt>name</dt>
    <dd>id</dd>
    <dt>namespace</dt>
    <dd>N/A</dd>
    <dt>value</dt>
    <dd>${cfn}</dd>
    <dt>removeIfEmpty</dt>
    <dd>true</dd>
    <dt>editAttribute</dt>
    <dd>true</dd>
</dl>
