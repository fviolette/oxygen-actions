#### ID
insert.file.relative.path

#### Name
Insert file with relative path

####  Description
Inserts a DITA topic/map in referencing files of different relative depths (e.g. Subject Scheme)

####  XPath
//topicmeta and not(//mapref/@type = 'subjectScheme')

#### Operation
XSLTOperation

#### Arguments
<dl>
    <dt>sourceLocation</dt>
    <dd>//topicmeta</dd>
    <dt>targetLocation</dt>
    <dd>//topicmeta</dd>
    <dt>script</dt>
</dl>

```xml

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0"
    xmlns:ditaarch="http://dita.oasis-open.org/architecture/2005/">
    
    <xsl:variable name="resourceDepth"
    select="string-length(base-uri(.))-string-length(translate(base-uri(/), '/', ''))"/>
    
    <xsl:variable name="resourceLocation">
        <xsl:choose>
            <xsl:when test="resourceDepth eq 4">
                <xsl:text>../../../../subjectscheme.ditamap</xsl:text>
            </xsl:when>
            <xsl:when test="resourceDepth eq 5">
                <xsl:text>../../../../../subjectscheme.ditamap</xsl:text>
            </xsl:when>
            <xsl:when test="resourceDepth eq 6">
                <xsl:text>../../../../../../subjectscheme.ditamap</xsl:text>
            </xsl:when>
            <xsl:otherwise>
                <xsl:comment>Current DITA Map should be at least one level up<xsl:comment>
                <xsl:comment>Inesrt the subjectSheme manually</xsl:comment>
            </xsl:otherwise>
        </xsl:choose>
    </xsl:variable>
    
    <xsl:template match="//topicmeta">
        <xsl:comment>SUBJECT SCHEME</xsl:comment>
        <xsl:element name="mapref">
            <xsl:attribute name="href">
                <xsl:value-of select="$subjectSchemeLocation"/>
            </xsl:attribute>
            <xsl:attribute name="type">
                subjectScheme
            </xsl:attribute>         
        </xsl:element>
    </xsl:template>
</xsl:stylesheet>

```
<dl>
	<dt>action</dt>
	<dd>Replace</dd>
	<dt>After</dt>
	<dd>First editable position</dd>
	<dt>expandEditorVariables</dt>
	<dd>true</dd>
</dl>

#### Comments
XSLT is mandatory as XPath expressions apply only to elements and attributes (no filename access).