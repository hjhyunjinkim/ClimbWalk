
import urllib.request 
import sys
import json
import pandas as pd 
from pandas.io.json import json_normalize 
from pandas import Series
import numpy as np
import requests, xmltodict

"""
산불위험지수 => 지역
"""
#참고:http://know.nifos.go.kr/know/service/list/forestPointInfo.do?opt=2&tab=9&subTab=1 
#산불위험예보지수를 바탕으로, 해당 지역의 산불위험지수의 평균이 40이하 이면 "매우 안전합니다 :)"  , 60 이하이면 "안전한 편이에요.", 그 외에는 "산불 위험! 조심해요!"
url_forestfire = "http://know.nifos.go.kr/openapi/forestPoint/forestPointListSearch.do?keyValue=kY2r4nKpKPmXVz%2Fuq6gS4CC%2FOSB7X9UtvJiuFwrAaIM%3D&gubun=sigungu&version=1.1&excludeForecast=0"

content_forestfire = requests.get(url_forestfire).content
dict_forestfire = xmltodict.parse(content_forestfire)
jsonString_forestfire = json.dumps(dict_forestfire['metadata']['outputData']['items'], ensure_ascii=False)
df_forestfire=pd.json_normalize(json.loads(jsonString_forestfire))
df_forestfire  = df_forestfire[df_forestfire['analdate'] == '2021-06-10 00']
df_forestfire = df_forestfire.reset_index(drop=True)


df_newforestfire = pd.DataFrame({'지역':[], '산불 위험 지수':[]})
df_newforestfire['지역'] = df_forestfire['sigun']
for i in range(len(df_forestfire)):
    if float(df_forestfire['meanavg'][i]) < 40  :
        df_newforestfire['산불 위험 지수'][i] = "매우 안전합니다 :)"   
    elif float(df_forestfire['meanavg'][i]) < 60 :
        df_newforestfire['산불 위험 지수'][i] = "안전한 편이에요."   
    else: 
        df_newforestfire['산불 위험 지수'][i] = "산불 위험! 조심해요!"

df_newforestfire = df_newforestfire.drop_duplicates(['지역'], keep = 'first')        
df_newforestfire

#df_newforestfire[df_newforestfire['지역'] == '종로구']


sys.stdout = open('output.txt','w')
#관악산
print(df_newforestfire[df_newforestfire['지역'] == '관악구' ])
#남한산
print(df_newforestfire[df_newforestfire['지역'] == '송파구' ])
#도봉산
print(df_newforestfire[df_newforestfire['지역'] == '도봉구' ])
#북한산
print(df_newforestfire[df_newforestfire['지역'] == '은평구' ])
#불암산
print(df_newforestfire[df_newforestfire['지역'] == '노원구' ])
#삼성산
print(df_newforestfire[df_newforestfire['지역'] == '관악구' ])
#수락산
print(df_newforestfire[df_newforestfire['지역'] == '노원구' ])
#아차산
print(df_newforestfire[df_newforestfire['지역'] == '중랑구' ])
#인왕산
print(df_newforestfire[df_newforestfire['지역'] == '서대문구' ])
#청계산
print(df_newforestfire[df_newforestfire['지역'] == '서초구' ])

