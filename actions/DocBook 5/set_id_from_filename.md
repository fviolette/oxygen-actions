#### ID
set.id.from.filename

#### Name
Set ID

#### Description
Set the @id attribute for <article>, <book>, <chapter>, <glossary>, <section> and <part> elements

#### XPath
N/A

#### Operation
ChangeAttributeOperation

#### Arguments
<dl>
    <dt>elementLocation</dt>
    <dd>ancestor-or-self::article | ancestor-or-self::book | ancestor-or-self::chapter | ancestor-or-self::glossary | ancestor-or-self::part | ancestor-or-self::section</dd>
    <dt>name</dt>
    <dd>xml:id</dd>
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