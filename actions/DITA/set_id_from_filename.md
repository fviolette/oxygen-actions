#### ID
set.id.from.filename

#### Name
Set ID

#### Description
Set the @id attribute for topic or topic-specialized elements from the filename

#### XPath
N/A

#### Operation
ChangeAttributeOperation

#### Arguments
<dl>
    <dt>elementLocation</dt>
    <dd>ancestor-or-self::*[contains(@class,' topic/topic ')]</dd>
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

#### Comments
https://www.oxygenxml.com/forum/topic7935.html

