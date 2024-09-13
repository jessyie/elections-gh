from django.core.cache import cache
#from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from django.template.loader import render_to_string
#import folium
import pandas as pd # type: ignore
import os # type: ignore
import geopandas as gpd
import fiona
#import matplotlib
import locale
import json
#from folium import plugins
from django.shortcuts import render, redirect
from django.contrib.staticfiles.storage import staticfiles_storage
from django.conf import settings
from dotenv import load_dotenv
from sqlalchemy import create_engine


# Load environment variables from .env file
load_dotenv()

# Get the variables from the environment
db_name = os.getenv('DB_NAME')
db_user = os.getenv('DB_USER')
db_password = os.getenv('DB_PASSWORD')
db_host = os.getenv('DB_HOST')


# Create the database engine using the variables
#engine = create_engine(f'postgresql://{db_user}:{db_password}@{db_host}:{db_port}/{db_name}')

# connection string: driver://username:password@server/database
engine = create_engine(f'postgresql+psycopg2://{db_user}:{db_password}@{db_host}/{db_name}')

# 2024 queries

# query2024 = """
#     SELECT "2024constituencies"."ConstName", "2024regions"."RegName", "2024data_const".*
#         FROM public."2024data_const"
#         Join "2024constituencies" on "2024data_const"."ConstCode"="2024constituencies"."ConstCode"
#         Join "2024regions" on "2024constituencies"."RegCode"="2024regions"."RegCode";

# """

# df2024 = pd.read_sql(query2024, engine)

# # 2020 queries

# query2020 = """
#     SELECT "2020constituencies"."ConstName", "2020regions"."RegName", "2020data_const".*
#         FROM public."2020data_const"
#         Join "2020constituencies" on "2020data_const"."ConstCode"="2020constituencies"."ConstCode"
#         Join "2020regions" on "2020constituencies"."RegCode"="2020regions"."RegCode";

# """

# df2020 = pd.read_sql(query2020, engine)

# # 2016 queries

# query2016 = """
#     SELECT "2016constituencies"."ConstName", "2016constituencies"."RegName", "2016data_const".*
#         FROM public."2016data_const"
#         Join "2016constituencies" on "2016data_const"."ConstCode"="2016constituencies"."ConstCode";

# """

# df2016 = pd.read_sql(query2016, engine)

# # 2012 queries

# query2012 = """
#     SELECT "2012constituencies"."ConstName", "2012constituencies"."RegName", "2012data_const".*
#         FROM public."2012data_const"
#         Join "2012constituencies" on "2012data_const"."ConstCode"="2012constituencies"."ConstCode";

# """

# df2012 = pd.read_sql(query2012, engine)

# # 2008 queries

# query2008 = """
#     SELECT "2008constituencies"."ConstName", "2008constituencies"."RegName", "2008data_const".*
#         FROM public."2008data_const"
#         Join "2008constituencies" on "2008data_const"."ConstCode"="2008constituencies"."ConstCode";

# """

# df2008 = pd.read_sql(query2008, engine)

# # 2008_R queries

# query2008_R = """
#     SELECT "2008constituencies"."ConstName", "2008constituencies"."RegName", "2008_Rdata_const".*
#         FROM public."2008_Rdata_const"
#         Join "2008constituencies" on "2008_Rdata_const"."ConstCode"="2008constituencies"."ConstCode";

# """

# df2008_R = pd.read_sql(query2008_R, engine)

# # 2004 queries

# query2004 = """
#     SELECT "2004constituencies"."ConstName", "2004constituencies"."RegName", "2004data_const".*
#         FROM public."2004data_const"
#         Join "2004constituencies" on "2004data_const"."ConstCode"="2004constituencies"."ConstCode";

# """

# df2004 = pd.read_sql(query2004, engine)

#print('this is df2a2012: ', df2a2012)

# ///////////////////////////


# POPULATION DEMOGRAPHICS


# /////////////////////////

queryPop = """
    SELECT "2020districts"."DistCode", "2020districts"."DistName", "2020districts"."RegCode", "2020regions"."RegName", "2020constituencies"."ConstName", "2020data_dist".*
        FROM public."2020data_dist"
        Join public."2020districts" on "2020data_dist"."ConstCode"="2020districts"."ConstCode"
        Join public."2020regions" on "2020districts"."RegCode"="2020regions"."RegCode"
        Join public."2020constituencies" on "2020districts"."ConstCode"="2020constituencies"."ConstCode";

"""

df3 = pd.read_sql(queryPop, engine)


#/////////////////////////////////


# F L A S H ____ D A T A


#/////////////////////////////////



# 2024

# FLASH REGION

# queryREGdf2024 = """
#     SELECT "2024regions"."RegName","2024flash_reg".* FROM public."2024flash_reg"
#     Join "2024regions" on "2024flash_reg"."RegCode"="2024regions"."RegCode";

# """

# flash_REGdf2024 = pd.read_sql(queryREGdf2024, engine)

# # FLASH CONSTITUENCY

# queryCONSTdf2024 = """
#     SELECT "2024regions"."RegName","2024regions"."RegCode","2024constituencies"."ConstName", "2024flash_const".* FROM 
#     public."2024flash_const"
#     Join "2024constituencies" on "2024flash_const"."ConstCode"="2024constituencies"."ConstCode"
#     Join "2024regions" on "2024constituencies"."RegCode"="2024regions"."RegCode";


# """

# flash_CONSTdf2024 = pd.read_sql(queryCONSTdf2024, engine)

# # FLASH POLLING STATION

# queryPSdf2024 = """
#     SELECT * FROM public."2024flash_ps"


# """

# flash_PSdf2024 = pd.read_sql(queryPSdf2024, engine)




# 2020

# FLASH REGION

queryREGdf2020 = """
    SELECT "2020regions"."RegName","2020flash_reg".* FROM public."2020flash_reg"
    Join public."2020regions" on "2020flash_reg"."RegCode"="2020regions"."RegCode";

"""

flash_REGdf2020 = pd.read_sql(queryREGdf2020, engine)

# FLASH CONSTITUENCY

queryCONSTdf2020 = """
    SELECT "2020regions"."RegName","2020regions"."RegCode","2020constituencies"."ConstName", "2020flash_const".* FROM 
    public."2020flash_const"
    Join public."2020constituencies" on "2020flash_const"."ConstCode"="2020constituencies"."ConstCode"
    Join public."2020regions" on "2020constituencies"."RegCode"="2020regions"."RegCode";


"""

flash_CONSTdf2020 = pd.read_sql(queryCONSTdf2020, engine)



# FLASH POLLING STATION

queryPSdf2020 = """
    SELECT * FROM public."2020flash_ps"


"""

flash_PSdf2020 = pd.read_sql(queryPSdf2020, engine)

flash_REGdf = flash_REGdf2020
flash_CONSTdf = flash_CONSTdf2020
flash_PSdf = flash_PSdf2020

#print(flash_REGdf)

#print(df2)
#print(df3)

#dfGroupH2 = df2.columns.tolist()[5:9]
#print(dfGroupH2)

# Convert WindowsPath object to string
data_loc_str = str(settings.DATA_LOC)





# print(f"This is df2:", df2)
# print(f"This is df2a:", df2a)

#def initialise_chart(year = '2020', region='Ashanti'):

    # Preprocessing of data
    
    
    # filename2 = year + '.csv' 
    # path2 = os.path.join(data_loc_str, 'EDATA', filename2)
    # df2 = gpd.read_file(path2)

    # filename3 = 'District_pop_demographics' + year + '.csv' 
    # path3 = os.path.join(data_loc_str, 'EDATA', filename3)
    # df3 = gpd.read_file(path3)

     # // Grouped according to Year and Office
    # grouped = df2.groupby(['YEAR', 'OFFICE'])
    # dfGroup = grouped.get_group((year, 'Parliament'))
    # dfGroup2 = grouped.get_group((year, 'Presidential First Round'))
    
    # groupedNewA = df2.groupby(['YEAR', 'OFFICE', 'REGION'])
    # dfGroupNew1 = groupedNewA.get_group((year, 'Parliament', region))
    # dfGroupNew1B = groupedNewA.get_group((year, 'Presidential First Round', region))

def initialise_chart(year = '2020', region='Ashanti', census='Total_Pop', electoral='valid_votes'):

    global df

    #  For 2020 and beyond 

    query1 = """
    SELECT "{year}constituencies"."ConstName", "{year}regions"."RegName", "{year}data_const".*
        FROM public."{year}data_const"
        Join public."{year}constituencies" on "{year}data_const"."ConstCode"="{year}constituencies"."ConstCode"
        Join public."{year}regions" on "{year}constituencies"."RegCode"="{year}regions"."RegCode";

        """
    

    #dfA = pd.read_sql(query, engine)


    #For 2016 and below 

    query2 = """
    SELECT "{year}constituencies"."ConstName", "{year}constituencies"."RegName", "{year}data_const".*
        FROM public."{year}data_const"
        Join public."{year}constituencies" on "{year}data_const"."ConstCode"="{year}constituencies"."ConstCode";

        """


    if int(year) in [2020, 2024]:
        query = query1.format(year=year)
    else:
        query = query2.format(year=year)
    
    df = pd.read_sql(query, engine)

    # dfB = pd.read_sql(query2, engine)



    #////////////////////

    #  Flash Data

    #///////////////////

    # query3 = f"""
    #     SELECT "{year}regions"."RegName","{year}flash_reg".* FROM public."{year}flash_reg"
    #         Join "{year}regions" on "{year}flash_reg"."RegCode"="{year}regions"."RegCode";

    # """

    # flash_REGdf = pd.read_sql(query3, engine)

    # query4 = f"""
    #     SELECT "{year}regions"."RegName","{year}regions"."RegCode","{year}constituencies"."ConstName", "{year}flash_const".* FROM 
    #     public."{year}flash_const"
    #         Join "{year}constituencies" on "{year}flash_const"."ConstCode"="{year}constituencies"."ConstCode"
    #         Join "{year}regions" on "{year}constituencies"."RegCode"="{year}regions"."RegCode";


    # """

    # flash_CONSTdf = pd.read_sql(query4, engine)

    # query5 = f"""
    #     SELECT * FROM public."{year}flash_ps"


    # """

    # flash_PSdf = pd.read_sql(query5, engine)


    # if year == '2024':
    #     df = df2024
    # elif year == '2016':
    #     df = df2016
    # elif year == '2012':
    #     df = df2012
    # elif year == '2008':
    #     df = df2008
    # elif year == '2008_R':
    #     df = df2008_R
    # elif year == '2004':
    #     df = df2004
    # else:
    #     df = df2020



    # FLASH DATA

    # if year == '2024':
    #     flash_REGdf = flash_REGdf2024
    #     flash_CONSTdf = flash_CONSTdf2024
    #     flash_PSdf = flash_PSdf2024
    # elif year == '2020':
    #     flash_REGdf = flash_REGdf2020
    #     flash_CONSTdf = flash_CONSTdf2020
    #     flash_PSdf = flash_PSdf2020
    # else:
    #     pass




    grouped = df.groupby(['year_', 'office'])
    dfGroup = grouped.get_group((year, 'Parliamentary'))
    dfGroup2 = grouped.get_group((year, 'Presidential'))
    
    groupedNewA = df.groupby(['year_', 'office', 'RegName'])
    dfGroupNew1 = groupedNewA.get_group((year, 'Parliamentary', region))
    dfGroupNew1B = groupedNewA.get_group((year, 'Presidential', region))

    grouped2P = df3.groupby(['RegName'])
    dfGroup2P = grouped2P.get_group(region)

    # GROUPING FLASH CONST BY REGION

    flash_CONSTdf2020_GROUPED = flash_CONSTdf2020.groupby(['RegName'])
    flash_CONSTdf2020_GROUPED_DONE = flash_CONSTdf2020_GROUPED.get_group(region) 

    
    
    # =======================================


   
    #//____________________________//

    #//  ANALYSIS OF DATA [PANDAS]
    #//____________________________//


    # // Finding the Total VALID_VOTES votes on Parliament (A)
    # Find the first column that contains '_C'
    first_C_column = dfGroup.columns[dfGroup.columns.str.contains('_C')][0]
    first_rejected_column = dfGroup.columns[dfGroup.columns.str.contains('rejected')][0]

    #print(first_rejected_column)

    dfGroupA = dfGroup.loc[:,electoral:first_C_column]
    dfGroupA = dfGroupA.drop(columns=first_C_column)
    #print(dfGroupA)
    dfGroupA = dfGroupA.replace(',','', regex=True) # Selecting specific columns and getting rid of the commas in the string
    dfGroupA = dfGroupA.apply(pd.to_numeric) # Converting all the string in the columns to integers
    tSum = dfGroupA[electoral].sum() # Sum operation on a specific column
    #print(tSum)

    # // Finding the Total VALID_VOTES votes on Presidential (A)
    first_C_column2 = dfGroup2.columns[dfGroup2.columns.str.contains('_C')][0]
    first_rejected_column2 = dfGroup2.columns[dfGroup2.columns.str.contains('rejected')][0]

    dfGroupB = dfGroup2.loc[:,electoral:first_C_column2]
    dfGroupB = dfGroupB.drop(columns=first_C_column2)
    dfGroupB = dfGroupB.replace(',','', regex=True)
    dfGroupB = dfGroupB.apply(pd.to_numeric)
    tSum2 = dfGroupB[electoral].sum()
    #print(dfGroupB)

    # // Finding the Total sum based on each region for Parliament (B)
    dfRegions = dfGroup[["RegName", electoral]].copy()
    dfRegions[electoral] = dfRegions[electoral].replace(',','', regex=True)
    dfRegions[electoral] = dfRegions[electoral].astype('int')
    dfRegionsSum = dfRegions.groupby(by=["RegName"])[electoral].sum().reset_index()
    graph1AX = dfRegionsSum['RegName'].values.tolist()
    graph1AY = dfRegionsSum[electoral]
    #print(dfRegionsSum)
    #print(graph1AY)

    # // Finding the Total sum based on each region for Presidential (B)
    dfRegions2 = dfGroup2[["RegName", electoral]].copy()
    dfRegions2[electoral] = dfRegions2[electoral].replace(',','', regex=True)
    dfRegions2[electoral] = dfRegions2[electoral].astype('int')
    dfRegionsSum2 = dfRegions2.groupby(by=["RegName"])[electoral].sum().reset_index()
    graph1BX = dfRegionsSum2['RegName']
    graph1BY = dfRegionsSum2[electoral]
    #print(dfRegionsSum2)

    # // Do Total sum operations for each party on Parliament (C)
    dfGroupC = dfGroup.loc[:,first_rejected_column:first_C_column]
    dfGroupC = dfGroupC.drop(columns=[first_rejected_column, first_C_column])
    dfGroupC = dfGroupC.replace(',','', regex=True) # Selecting specific columns and getting rid of the commas in the string
    dfGroupC = dfGroupC.apply(pd.to_numeric) # Converting all the string in the columns to integers
    #print('yeah', dfGroupC)
    tSumC = dfGroupC.sum().reset_index() # Sum operation on a specific column
    graph2AX = tSumC['index']
    graph2AY = tSumC[0]
    #print(dfGroupC)

    # // Do Total sum operations for each party on Presidential (C)
    dfGroupD = dfGroup2.loc[:,first_rejected_column2:first_C_column2]
    dfGroupD = dfGroupD.drop(columns=[first_rejected_column2, first_C_column2])
    dfGroupD = dfGroupD.replace(',','', regex=True) # Selecting specific columns and getting rid of the commas in the string
    dfGroupD = dfGroupD.apply(pd.to_numeric) # Converting all the string in the columns to integers
    tSumD = dfGroupD.sum().reset_index() # Sum operation on a specific column
    graph2BX = tSumD['index']
    graph2BY = tSumD[0]
    #print(graph2BX)

    # // Do the sum operations of each region on each party for both offices Parliament (D)
    data = [dfRegions, dfGroupA]
    dfMerge = pd.concat(data, axis=1, join='inner')
    dfGroupG = dfMerge
    df_cleanmodified = dfGroupG.loc[:, ~dfGroupG.columns.duplicated()]
    df_clean = df_cleanmodified.copy()

    #Ensuring column types are numeric where needed (for summing)
    numeric_columns = df_clean.columns[1:]  # Adjusting this to my actual range of numeric columns
    df_clean[numeric_columns] = df_clean[numeric_columns].apply(pd.to_numeric, errors='coerce')
    #dfGroupG = dfGroupG.apply(pd.to_numeric)
    df_grouped3 = df_clean.groupby(by="RegName")[numeric_columns].sum().reset_index()
    #print(df_grouped3)

    first_rejected_column3 = df_grouped3.columns[df_grouped3.columns.str.contains('rejected')][0]

    graph3AY = df_grouped3.loc[:,first_rejected_column3:]
    graph3AY = graph3AY.drop(columns=first_rejected_column3)
    #print(graph3AY)
    graph3AYes = graph3AY

    #print(graph3AYes)

    graph3AY = graph3AY.values.tolist()
    #print(graph3AY)
    graph3AX = df_grouped3['RegName'].values.tolist()
    df_grouped3z = df_grouped3.drop(columns=['rejected_votes','valid_votes'])
    df_grouped3z.fillna(0, inplace=True) 
    df_grouped3z = df_grouped3z.values.tolist()
    # b = df_grouped3


    # Add a new 'values' column containing the highest value for each region
    df_grouped3['Values'] = graph3AYes.apply(max, axis=1)
    #print('Values', df_grouped3)
    #print('Values', df_grouped3[numeric_columns])

    # Find the second highest value in each row
    df_grouped3['Second_Highest_Value'] = graph3AYes.apply(lambda row: sorted(row)[-2], axis=1)
    #print('Second_Highest_Value', df_grouped3)

    # Create a new column "Winners" with the name of the column having the maximum value
    df_grouped3['Winner'] = graph3AYes.idxmax(axis=1)
    #print('Winner', df_grouped3)
    #print(df_grouped3)

     # Find the name associated with the second highest value in each row
    df_grouped3['Second_Highest_Value_Name'] = graph3AYes.apply(lambda row: row.drop(row.idxmax()).idxmax(), axis=1)
    #print('Second_Highest_Value_Name', df_grouped3)
    # Find the total sum of values in each row
    df_grouped3['Total'] = graph3AYes.sum(axis=1)

    # Calculate the percentage of the highest value
    df_grouped3['Winner_Percentage'] = (df_grouped3['Values'] / df_grouped3['Total'] * 100).round(2)

    # Calculate the percentage of the second highest value
    df_grouped3['Second_Highest_Percentage'] = (df_grouped3['Second_Highest_Value'] / df_grouped3['Total'] * 100).round(2)

    # Define a color mapping dictionary for each party
    value_mapping = {'NPP': 10, 'NDC': 8, 'CPP': 5}

    # Create a new 'colors' column based on the 'Winners' column
    df_grouped3['Values_map'] = df_grouped3['Winner'].map(value_mapping)

    values_dict = df_grouped3.set_index("RegName")[["Values_map", "Winner", "Second_Highest_Value_Name", "Winner_Percentage", "Second_Highest_Percentage"]]


    # // Do the sum operations of each region on each party for both offices Presidential (D)
    data1 = [dfRegions2, dfGroupB]
    dfMergeB = pd.concat(data1, axis=1, join='inner')
    dfGroupE = dfMergeB
    df_clean2modified = dfGroupE.loc[:, ~dfGroupE.columns.duplicated()]
    df_clean2 = df_clean2modified.copy()

    #Ensuring column types are numeric where needed (for summing)
    numeric_columns2 = df_clean2.columns[1:]  # Adjusting this to my actual range of numeric columns
    df_clean2[numeric_columns2] = df_clean2[numeric_columns2].apply(pd.to_numeric, errors='coerce')
    #dfGroupE = dfGroupE
    df_grouped4 = df_clean2.groupby(by="RegName")[numeric_columns2].sum().reset_index()
    #print(df_grouped4)


    first_rejected_column4 = df_grouped4.columns[df_grouped4.columns.str.contains('rejected')][0]

    graph4AY = df_grouped4.loc[:,first_rejected_column4:]
    graph4AY = graph4AY.drop(columns=first_rejected_column4)
    #print(graph4AY)
    graph4AYes = graph4AY



    graph3BY = df_grouped4.iloc[:,3:].values.tolist()
    graph3BX = df_grouped4['RegName'].values.tolist()
    df_grouped4z = df_grouped4.drop(columns=['rejected_votes','valid_votes'])
    df_grouped4z.fillna(0, inplace=True) 
    #print(df_grouped4z)
    df_grouped4z = df_grouped4z.values.tolist()
    

    # Add a new 'values' column containing the highest value for each region
    df_grouped4['Values'] = graph4AYes.apply(max, axis=1)

    # Find the second highest value in each row
    df_grouped4['Second_Highest_Value'] = graph4AYes.apply(lambda row: sorted(row)[-2], axis=1)

    df_grouped4['Winner'] = graph4AYes.idxmax(axis=1)

     # Find the name associated with the second highest value in each row
    df_grouped4['Second_Highest_Value_Name'] = graph4AYes.apply(lambda row: row.drop(row.idxmax()).idxmax(), axis=1)

    # Find the total sum of values in each row
    df_grouped4['Total'] = graph4AYes.sum(axis=1)

    # Calculate the percentage of the highest value
    df_grouped4['Winner_Percentage'] = (df_grouped4['Values'] / df_grouped4['Total'] * 100).round(2)

    # Calculate the percentage of the second highest value
    df_grouped4['Second_Highest_Percentage'] = (df_grouped4['Second_Highest_Value'] / df_grouped4['Total'] * 100).round(2)

    # Define a color mapping dictionary for each party
    value_mappings = {'NPP': 10, 'NDC': 8, 'CPP': 5}

    # Create a new 'colors' column based on the 'Winners' column
    df_grouped4['Values_map_4'] = df_grouped4['Winner'].map(value_mappings)

    values_dict4 = df_grouped4.set_index("RegName")[["Values_map_4", "Winner", "Second_Highest_Value_Name", "Winner_Percentage", "Second_Highest_Percentage"]]


    # ---------------------------------

    # //   CONSTITUENCY LEVEL ////

    # _________________________________

    # // Finding the Total VALID_VOTES Constituency on Parliament (A)
    first_C_columnNew = dfGroupNew1.columns[dfGroupNew1.columns.str.contains('_C')][0]
    first_rejected_columnNew = dfGroupNew1.columns[dfGroupNew1.columns.str.contains('rejected')][0]
    first_rejected_columnNew1B = dfGroupNew1B.columns[dfGroupNew1B.columns.str.contains('rejected')][0]

    dfGroupAC = dfGroupNew1.loc[:,electoral:first_C_columnNew]
    dfGroupAC = dfGroupAC.drop(columns=first_C_columnNew)
    dfGroupAC = dfGroupAC.replace(',','', regex=True) # Selecting specific columns and getting rid of the commas in the string
    dfGroupAC = dfGroupAC.apply(pd.to_numeric) # Converting all the string in the columns to integers
    tSumR = dfGroupAC[electoral].values.sum() # Sum operation on a specific column
    #print(tSumR)
    
    
    # // Finding the Total VALID_VOTES Constituency on Presidential (A)
    first_C_columnNew1B = dfGroupNew1B.columns[dfGroupNew1B.columns.str.contains('_C')][0]
    dfGroupBC = dfGroupNew1B.loc[:,electoral:first_C_columnNew1B]
    dfGroupBC = dfGroupBC.drop(columns=first_C_columnNew1B)
    dfGroupBC =  dfGroupBC.replace(',','', regex=True)
    dfGroupBC = dfGroupBC.apply(pd.to_numeric)
    tSum2R = dfGroupBC[electoral].sum()
    #print(tSum2R)

     # // Have a column holding the sum operations of each constituency based on each region(Ashanti)Parliament for both offices (B)
    dfConst = dfGroupNew1[["ConstName", electoral]].copy()
    dfConst[electoral] = dfConst[electoral].replace(',','', regex=True)
    dfConst[electoral] = dfConst[electoral].astype('int')
    graphSub1AX = dfConst['ConstName'].values.tolist()
    graphSub1AY = dfConst[electoral].values.tolist()
    #print(graphSub1AY)
    
    
    # // Have a column holding the sum operations of each constituency based on each region(Ashanti) Presidential for both offices (B)
    dfConst1B = dfGroupNew1B[["ConstName", electoral]].copy()
    dfConst1B[electoral] = dfConst1B[electoral].replace(',','', regex=True)
    dfConst1B[electoral] = dfConst1B[electoral].astype('int')
    graphSub1BX = dfConst1B['ConstName'].values.tolist()
    graphSub1BY = dfConst1B[electoral].values.tolist()
    # print(graphSub1AY)

    # // Do Total sum operations for each party on Parliament CONSTITUENCY (C)
    dfGroupCP = dfGroupNew1.loc[:,first_rejected_columnNew:first_C_columnNew]
    dfGroupCP = dfGroupCP.drop(columns=[first_rejected_columnNew, first_C_columnNew])
    dfGroupCP = dfGroupCP.replace(',','', regex=True) # Selecting specific columns and getting rid of the commas in the string
    dfGroupCP = dfGroupCP.apply(pd.to_numeric) # Converting all the string in the columns to integers
    tSumCP = dfGroupCP.sum().reset_index() # Sum operation on a specific column
    graph2AXP = tSumCP['index'].tolist()
    graph2AYP = tSumCP[0]
    #print(graph2AXP)
    
    # // Do Total sum operations for each party on Presidential CONSTITUENCY (C)
    dfGroupDP = dfGroupNew1B.loc[:,first_rejected_columnNew1B:first_C_columnNew1B]
    dfGroupDP = dfGroupDP.drop(columns=[first_rejected_columnNew1B, first_C_columnNew1B])
    dfGroupDP = dfGroupDP.replace(',','', regex=True) # Selecting specific columns and getting rid of the commas in the string
    dfGroupDP = dfGroupDP.apply(pd.to_numeric) # Converting all the string in the columns to integers
    tSumDP = dfGroupDP.sum().reset_index() # Sum operation on a specific column
    graph2BXP = tSumDP['index']
    graph2BYP = tSumDP[0]
    #print(graph2BXP)
    
    
    # // (D) Ashanti(Parliament) Do Total sum operations for each party on each constituency based on each region for both necessary offices (F) Parliament
    dfGroup1A = dfGroupNew1.loc[:,electoral:first_C_columnNew]
    dfGroup1A = dfGroup1A.drop(columns=first_C_columnNew)
    dfGroup1A = dfGroup1A.loc[:,electoral:].replace(',','', regex=True) # Selecting specific columns and getting rid of the commas in the string
    dfGroup1A = dfGroup1A.apply(pd.to_numeric) # Converting all the string in the columns to integers
    dfConst = dfGroupNew1[["ConstName", "ConstCode", electoral]]
    data1A = [dfConst, dfGroup1A]
    dfMerge1A = pd.concat(data1A, axis=1, join='inner')

    df_cleanCmodified = dfMerge1A.loc[:, ~dfMerge1A.columns.duplicated()]
    df_cleanC = df_cleanCmodified.copy()

    #print(df_cleanC)

    #Ensuring column types are numeric where needed (for summing)
    numeric_columnsC = df_cleanC.columns[2:]  # Adjusting this to my actual range of numeric columns
    df_cleanC[numeric_columnsC] = df_cleanC[numeric_columnsC].apply(pd.to_numeric, errors='coerce')


    # first_rejected_columnC = df_cleanC.columns[df_cleanC.columns.str.contains('rejected')][0]

    # dfGroupG1A = df_cleanC.loc[:,first_rejected_columnC:]
    # dfGroupG1A = dfGroupG1A.drop(columns=first_rejected_columnC)


    # #print(dfMerge1A)
    # dfGroupG1A = dfGroupG1A.replace(',','', regex=True)
    # dfGroupG1A = dfGroupG1A.apply(pd.to_numeric)
    #df_grouped3_1A = df_cleanC.groupby(by="ConstCode")[numeric_columnsC].sum().reset_index()
    #print(df_grouped3_1A)


    first_rejected_column3_1A = df_cleanC.columns[df_cleanC.columns.str.contains('rejected')][0]

    graph4AY_3_1A = df_cleanC.loc[:,first_rejected_column3_1A:]
    graph4AY_3_1A = graph4AY_3_1A.drop(columns=first_rejected_column3_1A)
    #print(graph4AY)
    graph4AYes_3_1A = graph4AY_3_1A




    graph3AY_1A = df_cleanC.iloc[:,4:]
    #print(graph3AY_1A)
    graph3AX_1A=df_cleanC.ConstName
    df_grouped3zP = df_cleanC.drop(columns=['rejected_votes','valid_votes'])
    df_grouped3zP.fillna(0, inplace=True)
    #print(df_grouped3_1A)
    df_grouped3zP = df_grouped3zP.values.tolist()
    #print(df_grouped3_1A.CONSTITUENCY)

     # Add a new 'values' column containing the highest value for each region
    df_cleanC['Values'] = graph4AYes_3_1A.apply(max, axis=1)

    # Find the second highest value in each row
    df_cleanC['Second_Highest_Value'] = graph4AYes_3_1A.apply(lambda row: sorted(row)[-2], axis=1)

    df_cleanC['Winner'] = graph4AYes_3_1A.idxmax(axis=1)

     # Find the name associated with the second highest value in each row
    df_cleanC['Second_Highest_Value_Name'] = graph4AYes_3_1A.apply(lambda row: row.drop(row.idxmax()).idxmax(), axis=1)

    # Find the total sum of values in each row
    df_cleanC['Total'] = graph4AYes_3_1A.sum(axis=1)

    # Calculate the percentage of the highest value
    df_cleanC['Winner_Percentage'] = (df_cleanC['Values'] / df_cleanC['Total'] * 100).round(2)

    # Calculate the percentage of the second highest value
    df_cleanC['Second_Highest_Percentage'] = (df_cleanC['Second_Highest_Value'] / df_cleanC['Total'] * 100).round(2)

    value_mappingConstA = {'NPP': 10, 'NDC': 8, 'CPP': 5}

    # Create a new 'colors' column based on the 'Winners' column
    df_cleanC['Values_map'] = df_cleanC['Winner'].map(value_mappingConstA)
    #print(df_cleanC)

    values_dictConstA = df_cleanC.set_index("ConstCode")[["ConstName", "Values_map", "Winner", "Second_Highest_Value_Name", "Winner_Percentage", "Second_Highest_Percentage"]]
    #print(values_dictConstA)
    
    # // (D) Ashanti(Presidential) Do Total sum operations for each party on each constituency based on each region for both necessary offices (F) Presidential
    dfGroup1B = dfGroupNew1B.loc[:,electoral:first_C_columnNew1B]
    dfGroup1B = dfGroup1B.drop(columns=first_C_columnNew1B)
    dfGroup1B = dfGroup1B.loc[:,electoral:].replace(',','', regex=True) # Selecting specific columns and getting rid of the commas in the string
    dfGroup1B = dfGroup1B.apply(pd.to_numeric) # Converting all the string in the columns to integers
    dfConstB = dfGroupNew1B[["ConstName", "ConstCode", electoral]]
    data1B = [dfConstB, dfGroup1B]
    dfMerge1B = pd.concat(data1B, axis=1, join='inner')

    df_cleanC2modified = dfMerge1B.loc[:, ~dfMerge1B.columns.duplicated()]
    df_cleanC2 = df_cleanC2modified.copy()

    #Ensuring column types are numeric where needed (for summing)
    numeric_columnsC2 = df_cleanC2.columns[2:]  # Adjusting this to my actual range of numeric columns
    df_cleanC2[numeric_columnsC2] = df_cleanC2[numeric_columnsC2].apply(pd.to_numeric, errors='coerce')


    # first_rejected_columnC2 = df_cleanC2.columns[df_cleanC2.columns.str.contains('rejected')][0]

    # dfGroupG1B = df_cleanC2.loc[:,first_rejected_columnC2:]
    # dfGroupG1B = dfGroupG1B.drop(columns=first_rejected_columnC2)



    # #print(df2)
    # dfGroupG1B = dfGroupG1B.replace(',','', regex=True)
    # dfGroupG1B = dfGroupG1B.apply(pd.to_numeric)
    #df_cleanC2 = df_cleanC2.groupby(by="ConstCode")[numeric_columnsC2].sum().reset_index()



    first_rejected_column3_1B = df_cleanC2.columns[df_cleanC2.columns.str.contains('rejected')][0]

    graph4AY_3_1B = df_cleanC2.loc[:,first_rejected_column3_1B:]
    graph4AY_3_1B = graph4AY_3_1B.drop(columns=first_rejected_column3_1B)
    #print(graph4AY)
    graph4AYes_3_1B = graph4AY_3_1B




    graph3AY_1B = df_cleanC2.iloc[:,4:]
    graph3AX_1B=df_cleanC2.ConstName
    df_grouped3zP2 = df_cleanC2.drop(columns=['rejected_votes','valid_votes'])
    df_grouped3zP2.fillna(0, inplace=True)
    #print(df_grouped3zP2)
    df_grouped3zP2 = df_grouped3zP2.values.tolist()
    #print(df_grouped3_1B.CONSTITUENCY)

     # Add a new 'values' column containing the highest value for each region
    df_cleanC2['Values'] = graph4AYes_3_1B.apply(max, axis=1)

    # Find the second highest value in each row
    df_cleanC2['Second_Highest_Value'] = graph4AYes_3_1B.apply(lambda row: sorted(row)[-2], axis=1)

    df_cleanC2['Winner'] = graph4AYes_3_1B.idxmax(axis=1)

     # Find the name associated with the second highest value in each row
    df_cleanC2['Second_Highest_Value_Name'] = graph4AYes_3_1B.apply(lambda row: row.drop(row.idxmax()).idxmax(), axis=1)

    # Find the total sum of values in each row
    df_cleanC2['Total'] = graph4AYes_3_1B.sum(axis=1)

    # Calculate the percentage of the highest value
    df_cleanC2['Winner_Percentage'] = (df_cleanC2['Values'] / df_cleanC2['Total'] * 100).round(2)

    # Calculate the percentage of the second highest value
    df_cleanC2['Second_Highest_Percentage'] = (df_cleanC2['Second_Highest_Value'] / df_cleanC2['Total'] * 100).round(2)

    value_mappingConstB = {'NPP': 10, 'NDC': 8, 'CPP': 5}

    # Create a new 'colors' column based on the 'Winners' column
    df_cleanC2['Values_map'] = df_cleanC2['Winner'].map(value_mappingConstB)

    values_dictConstB = df_cleanC2.set_index("ConstCode")[["ConstName", "Values_map", "Winner", "Second_Highest_Value_Name", "Winner_Percentage", "Second_Highest_Percentage"]]




    #////////////////////////////////////////////////////////////////////////////////////


    # JUST 2020 CONSTITUENCY INFORMATION UPDATED



    #////////////////////////////////////////////////////////////////////////////////////


     # // (D) Ashanti(Parliament) Do Total sum operations for each party on each constituency based on each region for both necessary offices (F) Parliament
    dfGroup1ACONST2 = dfGroup.loc[:,electoral:first_C_column]
    dfGroup1ACONST2 = dfGroup1ACONST2.drop(columns=first_C_column)
    dfGroup1ACONST2 = dfGroup1ACONST2.loc[:,electoral:].replace(',','', regex=True) # Selecting specific columns and getting rid of the commas in the string
    dfGroup1ACONST2 = dfGroup1ACONST2.apply(pd.to_numeric) # Converting all the string in the columns to integers
    dfConstCONST2 = dfGroup[["ConstName", "ConstCode", electoral]]
    data1ACONST2 = [dfConstCONST2, dfGroup1ACONST2]
    dfMerge1ACONST2 = pd.concat(data1ACONST2, axis=1, join='inner')

    df_cleanC2020modified = dfMerge1ACONST2.loc[:, ~dfMerge1ACONST2.columns.duplicated()]
    df_cleanC2020 = df_cleanC2020modified.copy()

    #Ensuring column types are numeric where needed (for summing)
    numeric_columnsC2020 = df_cleanC2020.columns[2:]  # Adjusting this to my actual range of numeric columns
    df_cleanC2020[numeric_columnsC2020] = df_cleanC2020[numeric_columnsC2020].apply(pd.to_numeric, errors='coerce')


    # first_rejected_columnC2020 = df_cleanC2020.columns[df_cleanC2020.columns.str.contains('rejected')][0]

    # dfGroupG1ACONST2 = df_cleanC2020.loc[:,first_rejected_columnC2020:]
    # dfGroupG1ACONST2 = dfGroupG1ACONST2.drop(columns=first_rejected_columnC2020)



    # #print(df2)
    # dfGroupG1ACONST2 = dfGroupG1ACONST2.replace(',','', regex=True)
    # dfGroupG1ACONST2 = dfGroupG1ACONST2.apply(pd.to_numeric)
    #df_cleanC2020 = dfMerge1ACONST2.groupby(by="ConstCode")[numeric_columnsC2020].sum().reset_index()



    first_rejected_column3_1ACONST2 = df_cleanC2020.columns[df_cleanC2020.columns.str.contains('rejected')][0]

    graph4AY_3_1ACONST2 = df_cleanC2020.loc[:,first_rejected_column3_1ACONST2:]
    graph4AY_3_1ACONST2 = graph4AY_3_1ACONST2.drop(columns=first_rejected_column3_1ACONST2)
    #print(graph4AY)
    graph4AYes_3_1ACONST2 = graph4AY_3_1ACONST2



    graph3AY_1ACONST2 = df_cleanC2020.iloc[:,4:]
    graph3AX_1ACONST2=df_cleanC2020.ConstName
    df_grouped3zPCONST2 = df_cleanC2020.drop(columns=['rejected_votes','valid_votes'])
    df_grouped3zPCONST2.fillna(0, inplace=True)
    df_grouped3zPCONST2 = df_grouped3zPCONST2.values.tolist()
    #print(df_grouped3_1A.CONSTITUENCY)

     # Add a new 'values' column containing the highest value for each region
    df_cleanC2020['Values'] = graph4AYes_3_1ACONST2.apply(max, axis=1)

    # Find the second highest value in each row
    df_cleanC2020['Second_Highest_Value'] = graph4AYes_3_1ACONST2.apply(lambda row: sorted(row)[-2], axis=1)

    df_cleanC2020['Winner'] = graph4AYes_3_1ACONST2.idxmax(axis=1)

    # Counting the number of constituencies won by each party
    party_wins = df_cleanC2020['Winner'].value_counts()
    #print(party_wins)
    party_wins_dict = party_wins.to_dict()

    const_won_by_party = [{"name": party, "y": count} for party, count in party_wins_dict.items()]
    #print(const_won_by_party)

    names = [item["name"] for item in const_won_by_party]

    count_y = [item["y"] for item in const_won_by_party]

    #print(names)
    #print(count_y)

    #const_won_by_party_data = json.dumps(const_won_by_party)

     # Find the name associated with the second highest value in each row
    df_cleanC2020['Second_Highest_Value_Name'] = graph4AYes_3_1ACONST2.apply(lambda row: row.drop(row.idxmax()).idxmax(), axis=1)

    # Find the total sum of values in each row
    df_cleanC2020['Total'] = graph4AYes_3_1ACONST2.sum(axis=1)

    # Calculate the percentage of the highest value
    df_cleanC2020['Winner_Percentage'] = (df_cleanC2020['Values'] / df_cleanC2020['Total'] * 100).round(2)

    # Calculate the percentage of the second highest value
    df_cleanC2020['Second_Highest_Percentage'] = (df_cleanC2020['Second_Highest_Value'] / df_cleanC2020['Total'] * 100).round(2)

    value_mappingConstACONST2 = {'NPP': 10, 'NDC': 8, 'CPP': 5}

    # Create a new 'colors' column based on the 'Winners' column
    df_cleanC2020['Values_map'] = df_cleanC2020['Winner'].map(value_mappingConstACONST2)

    values_dictConstACONST2 = df_cleanC2020.set_index("ConstCode")[["ConstName", "Values_map", "Winner", "Second_Highest_Value_Name", "Winner_Percentage", "Second_Highest_Percentage"]]
    
    
    # // (D) Ashanti(Presidential) Do Total sum operations for each party on each constituency based on each region for both necessary offices (F) Presidential
    dfGroup1BCONST2 = dfGroup2.loc[:,electoral:first_C_column2]
    dfGroup1BCONST2 = dfGroup1BCONST2.drop(columns=first_C_column2)
    dfGroup1BCONST2 = dfGroup1BCONST2.loc[:,electoral:].replace(',','', regex=True) # Selecting specific columns and getting rid of the commas in the string
    dfGroup1BCONST2 = dfGroup1BCONST2.apply(pd.to_numeric) # Converting all the string in the columns to integers
    dfConstBCONST2 = dfGroup2[["ConstName", "ConstCode", electoral]]
    data1BCONST2 = [dfConstBCONST2, dfGroup1BCONST2]
    dfMerge1BCONST2 = pd.concat(data1BCONST2, axis=1, join='inner')

    df_cleanC2020Bmodified = dfMerge1BCONST2.loc[:, ~dfMerge1BCONST2.columns.duplicated()]
    df_cleanC2020B = df_cleanC2020Bmodified.copy()

    #Ensuring column types are numeric where needed (for summing)
    numeric_columnsC2020B = df_cleanC2020B.columns[2:]  # Adjusting this to my actual range of numeric columns
    df_cleanC2020B[numeric_columnsC2020B] = df_cleanC2020B[numeric_columnsC2020B].apply(pd.to_numeric, errors='coerce')



    # first_rejected_columnC2020B = df_cleanC2020B.columns[df_cleanC2020B.columns.str.contains('rejected')][0]

    # dfGroupG1BCONST2 = df_cleanC2020B.loc[:,first_rejected_columnC2020B:]
    # dfGroupG1BCONST2 = dfGroupG1BCONST2.drop(columns=first_rejected_columnC2020B)



    # #print(df2)
    # dfGroupG1BCONST2 = dfGroupG1BCONST2.replace(',','', regex=True)
    # dfGroupG1BCONST2 = dfGroupG1BCONST2.apply(pd.to_numeric)
    #df_cleanC2020B = dfMerge1BCONST2.groupby(by="ConstCode")[numeric_columnsC2020B].sum().reset_index()


    first_rejected_column3_1BCONST2 = df_cleanC2020B.columns[df_cleanC2020B.columns.str.contains('rejected')][0]

    graph4AY_3_1BCONST2 = df_cleanC2020B.loc[:,first_rejected_column3_1BCONST2:]
    graph4AY_3_1BCONST2 = graph4AY_3_1BCONST2.drop(columns=first_rejected_column3_1BCONST2)
    #print(graph4AY)
    graph4AYes_3_1BCONST2 = graph4AY_3_1BCONST2



    #print(graph4AYes_3_1BCONST2)


    graph3AY_1BCONST2 = df_cleanC2020B.iloc[:,4:]
    graph3AX_1BCONST2=df_cleanC2020B.ConstName
    df_grouped3zP2CONST2 = df_cleanC2020B.drop(columns=['rejected_votes','valid_votes'])
    df_grouped3zP2CONST2.fillna(0, inplace=True)

    df_grouped3zP2CONST2 = df_grouped3zP2CONST2.values.tolist()

     # Adding a new 'values' column containing the highest value for each region
    df_cleanC2020B['Values'] = graph4AYes_3_1BCONST2.apply(max, axis=1)

    # Find the second highest value in each row
    df_cleanC2020B['Second_Highest_Value'] = graph4AYes_3_1BCONST2.apply(lambda row: sorted(row)[-2], axis=1)

    df_cleanC2020B['Winner'] = graph4AYes_3_1BCONST2.idxmax(axis=1)


    #print(df_cleanC2020B)
     # Find the name associated with the second highest value in each row
    df_cleanC2020B['Second_Highest_Value_Name'] = graph4AYes_3_1BCONST2.apply(lambda row: row.drop(row.idxmax()).idxmax(), axis=1)

    # Find the total sum of values in each row
    df_cleanC2020B['Total'] = graph4AYes_3_1BCONST2.sum(axis=1)

    # Calculate the percentage of the highest value
    df_cleanC2020B['Winner_Percentage'] = (df_cleanC2020B['Values'] / df_cleanC2020B['Total'] * 100).round(2)

    # Calculate the percentage of the second highest value
    df_cleanC2020B['Second_Highest_Percentage'] = (df_cleanC2020B['Second_Highest_Value'] / df_cleanC2020B['Total'] * 100).round(2)

    value_mappingConstBCONST2 = {'NPP': 10, 'NDC': 8, 'CPP': 5}

    # Create a new 'colors' column based on the 'Winners' column
    df_cleanC2020B['Values_map'] = df_cleanC2020B['Winner'].map(value_mappingConstBCONST2)

    values_dictConstBCONST2 = df_cleanC2020B.set_index("ConstCode")[["ConstName", "Values_map", "Winner", "Second_Highest_Value_Name", "Winner_Percentage", "Second_Highest_Percentage"]]
    #print(values_dictConstBCONST2)

    #global dfGroupH2

     #// List of the header columns
    dfGroupH2 = df.columns.tolist()[5:9]
    dfGroupH3 = df.columns.tolist()[5:9]
    dfGroupH4 = df.columns.tolist()[5:9]
    dfGroupH5 = df.columns.tolist()[5:9]
    # print(dfGroupH2)

    tSum = dfGroupA[electoral].values.sum().astype(int).tolist()
    tSum2 = dfGroupB[electoral].values.sum().astype(int).tolist()
    tSumR = dfGroupAC[electoral].values.sum().astype(int).tolist()
    tSum2R = dfGroupBC[electoral].values.sum().astype(int).tolist() 
    graph1AX = dfRegionsSum['RegName'].values.tolist()
    graph1AY = dfRegionsSum[electoral].values.astype(int).tolist()
    graphSub1AX = dfConst['ConstName'].values.tolist()
    #graphSub1AY = dfConst['VALID_VOTES'].values.astype(int).tolist() 
    graph1BX = dfRegionsSum2['RegName'].values.tolist()
    graph1BY = dfRegionsSum2[electoral].values.astype(int).tolist()
    graphSub1BX = dfConst1B['ConstName'].values.tolist()
    #graphSub1BY = dfConst1B['VALID_VOTES'].values.astype(int).tolist()  
    graph2AX = tSumC['index'].values.astype(str).tolist()
    graph2AY = tSumC[0].values.astype(int).tolist()
    graph2AXP = tSumCP['index'].values.astype(str).tolist()
    graph2AYP = tSumCP[0].values.astype(int).tolist()  
    graph2BX = tSumD['index'].values.astype(str).tolist()
    graph2BY = tSumD[0].values.astype(int).tolist()
    graph2BXP = tSumDP['index'].values.astype(str).tolist()
    graph2BYP = tSumDP[0].values.astype(int).tolist() 
    #graph3AY = df_grouped3.iloc[:,1:].values.astype(int).tolist()
    graph3AX = df_grouped3['RegName'].values.tolist()
    #graph3BY = df_grouped4.iloc[:,1:].values.astype(int).tolist()
    graph3BX = df_grouped4['RegName'].values.tolist()
    # gapa1AX = gapaSum['YEAR'].values.tolist()
    tSumCA = tSumC.values.tolist()
    tSumDA = tSumD.values.tolist()
    tSumCAP = tSumCP.values.tolist()
    tSumDAP = tSumDP.values.tolist()

    GHMap2 = gpd.read_file(os.path.join(data_loc_str, 'images', 'ghana_regions16.geojson'))
    GHMap = gpd.read_file(os.path.join(data_loc_str, 'images', 'ghana_regions.geojson'))
    GHMapConst = gpd.read_file(os.path.join(data_loc_str, 'images', 'constituencies2020.geojson'))
    GHMap_PS = gpd.read_file(os.path.join(data_loc_str, 'images', 'polling_stations.geojson'))


    # #_______________________________________


    # #// Parliament year 2016 and below //


    # #______________________________________

    merged_GHMap2A_json = GHMap.merge(values_dict, left_on="region", right_index=True)

    merged_GHMap2A = merged_GHMap2A_json.to_json()


    # #// Presidential year 2016 and below //

    merged2_GHMap2A_json = GHMap.merge(values_dict4, left_on="region", right_index=True)

    merged2_GHMap2A = merged2_GHMap2A_json.to_json()


    # #________________________________________


    # #// Parliament year 2020 and beyond //


    # #______________________________________



    merged_GHMap2_json = GHMap2.merge(values_dict, left_on="region", right_index=True)

    merged_GHMap2 = merged_GHMap2_json.to_json()


    # #// Presidential year 2020 and beyond //

    # #_______________________________________

    merged2_GHMap2_json = GHMap2.merge(values_dict4, left_on="region", right_index=True)

    merged2_GHMap2 = merged2_GHMap2_json.to_json()

    #  #________________________________________


    # #// Constituency Parliament year 2020 and beyond //


    # #______________________________________



    merged_GHMap2Const_json = GHMapConst.merge(values_dictConstA, left_on="ConstCode", right_index=True)

    merged_GHMap2Const = merged_GHMap2Const_json.to_json()




    #/////////////////////////////////////////////////////

    # JUST 2020 CONSTIYUENCY INFORMATION PARLIAMENT

    merged_GHMap2Const_jsonCONST2 = GHMapConst.merge(values_dictConstACONST2, left_on="ConstCode", right_index=True)

    merged_GHMap2ConstCONST2 = merged_GHMap2Const_jsonCONST2.to_json()

    # print(merged_GHMap2ConstCONST2)


    #/////////////////////////////////////////////////////

    # #_______________________________________


    # #// Constituency Presidential year 2020 and beyond //

    # #_______________________________________

    merged2_GHMap2Const_json = GHMapConst.merge(values_dictConstB, left_on="ConstCode", right_index=True)

    merged2_GHMap2Const = merged2_GHMap2Const_json.to_json()

    #print(values_dictConstB)




    #/////////////////////////////////////////////////////

    # JUST 2020 CONSTIYUENCY INFORMATION PRESIDENTIAL

    merged2_GHMap2Const_jsonCONST2 = GHMapConst.merge(values_dictConstBCONST2, left_on="ConstCode", right_index=True)

    merged2_GHMap2ConstCONST2 = merged2_GHMap2Const_jsonCONST2.to_json()

    #//////////////////////////////////////////////////////

    # FLASH_REG ///

    mergedFlashREG_GHMap2_json = GHMap2.merge(flash_REGdf, left_on="region", right_on="RegName")

    mergedFlashREG_GHMap2_json['percentage_PS_affected'] = mergedFlashREG_GHMap2_json['percentage_PS_affected'].round(2)

    mergedFlashREG_GHMap2 = mergedFlashREG_GHMap2_json.to_json()


    # FLASH_CONST ///

    mergedFlashCONST_GHMap2_json = GHMapConst.merge(flash_CONSTdf2020_GROUPED_DONE, left_on="ConstCode", right_on="ConstCode")

    mergedFlashCONST_GHMap2 = mergedFlashCONST_GHMap2_json.to_json()

    #print(mergedFlashCONST_GHMap2)

    #/////////////////////////////

    # MERGING BASED ON CONSITUEN

    mergedFlashCONST_GHMap2_jsonNew = GHMapConst.merge(flash_CONSTdf2020_GROUPED_DONE, left_on="Constituen", right_on="ConstName")

    mergedFlashCONST_GHMap2New = mergedFlashCONST_GHMap2_jsonNew.to_json()


    # FLASH_PS /// 

    mergedFlashPS_GHMap2_json = GHMap_PS.merge(flash_PSdf, left_on="PS Code", right_on="PSCode")

    mergedFlashPS_GHMap2 = mergedFlashPS_GHMap2_json.to_json()


    #////////////////////////////////////////////


    # df_winning = graph4AYes_3_1BCONST2

    # # For each row (constituency), finding the party with the highest value
    # df_winning['WinningParty'] = df_winning.idxmax(axis=1)

    # # Counting the number of constituencies won by each party
    # party_wins = df_winning['WinningParty'].value_counts()
    # print(party_wins)






     #________________________________

    #// POPULATION DATA PROCESSING//

    #_______________________________

   # // Finding the Total Pop in relation to the Regions
    dfGroupA2P = df3[["RegName", census]].copy() # Selecting specific columns and getting rid of the commas in the string
    dfGroupA2P[census] = dfGroupA2P[census].astype('float') # Converting all the string in the columns to integers
    tSum2P = dfGroupA2P[census].values.sum() # Sum operation on a specific column
    dfContinentSum2P = dfGroupA2P.groupby(by=["RegName"])[census].sum().reset_index()
    graph1AX2P = dfContinentSum2P['RegName'].values.tolist()
    graph1AY2P = dfContinentSum2P[census]

    # // Finding the Total Pop in relation to the Districts
    dfGroupB2P = dfGroup2P[["ConstName", census]].copy() # Selecting specific columns and getting rid of the commas in the string
    dfGroupB2P[census] = dfGroupB2P[census].astype('float') # Converting all the string in the columns to integers
    tSumB2P = dfGroupB2P[census].values.sum() # Sum operation on a specific column
    dfContinentSumB2P = dfGroupB2P.groupby(by=["ConstName"])[census].sum().reset_index()
    graph1BX2P = dfContinentSumB2P['ConstName'].values.tolist()
    graph1BY2P = dfContinentSumB2P[census]

    #// List of the header columns
    dfGroupH = df3.columns.tolist()[8:-1]
    
    tSum2P = dfGroupA2P[census].values.sum().astype('float').tolist()
    graph1AX2P = dfContinentSum2P['RegName'].values.tolist()
    graph1AY2P = dfContinentSum2P[census].values.tolist()

    tSumB2P = dfGroupB2P[census].values.sum().astype('float').tolist()
    graph1BX2P = dfContinentSumB2P['ConstName'].values.tolist()
    graph1BY2P = dfContinentSumB2P[census].values.tolist()

 
    context = {
    'tSum' : tSum,
    'tSum2' : tSum2,
    'tSumR' : tSumR,
    'tSum2R' : tSum2R,
    'tSumCA' : tSumCA,
    'tSumDA' : tSumDA,
    'tSumCAP' : tSumCAP,
    'tSumDAP' : tSumDAP,
    'df_grouped3z' : df_grouped3z,
    'df_grouped4z' : df_grouped4z,
    'df_grouped3zP' : df_grouped3zP,
    'df_grouped3zP2' : df_grouped3zP2,
    'graph1AX' : graph1AX,
    'graph1AY' : graph1AY,
    'graphSub1AX' : graphSub1AX,
    'graphSub1AY' : graphSub1AY,
    'graph1BX' : graph1BX,
    'graph1BY' : graph1BY,
    'graphSub1BX' : graphSub1BX,
    'graphSub1BY' : graphSub1BY,
    'graph2AX' : graph2AX,
    'graph2AY' : graph2AY,
    'graph2AXP' : graph2AXP,
    'graph2AYP' : graph2AYP,
    'graph2BX' : graph2BX,
    'graph2BY' : graph2BY,
    'graph2BXP' : graph2BXP,
    'graph2BYP' : graph2BYP,
    'graph3AY' : graph3AY,
    'graph3AX' : graph3AX,
    'graph3BY' : graph3BY,
    'graph3BX' : graph3BX,
    'tSum2P' : tSum2P,
    'tSumB2P' : tSumB2P,
    'graph1AX2P' : graph1AX2P,
    'graph1AY2P' : graph1AY2P,
    'graph1BX2P' : graph1BX2P,
    'graph1BY2P' : graph1BY2P,
    'dfGroupH' : dfGroupH,
    'dfGroupH2' : dfGroupH2,
    'dfGroupH3' : dfGroupH3,
    'dfGroupH4' : dfGroupH4,
    'dfGroupH5' : dfGroupH4,
    'merged_GHMap2A' : merged_GHMap2A,
    'merged2_GHMap2A' : merged2_GHMap2A,
    'merged_GHMap2' : merged_GHMap2,
    'merged2_GHMap2' : merged2_GHMap2,
    'merged_GHMap2Const' : merged_GHMap2Const,
    'merged2_GHMap2Const' : merged2_GHMap2Const,
    'merged_GHMap2ConstCONST2' : merged_GHMap2ConstCONST2,
    'merged2_GHMap2ConstCONST2' : merged2_GHMap2ConstCONST2,
    'mergedFlashREG_GHMap2': mergedFlashREG_GHMap2,
    'mergedFlashCONST_GHMap2' : mergedFlashCONST_GHMap2,
    'mergedFlashCONST_GHMap2New' : mergedFlashCONST_GHMap2New,
    'mergedFlashPS_GHMap2': mergedFlashPS_GHMap2,
    #'const_won_by_party_data' : const_won_by_party_data,
    'names' : names,
    'count_y' : count_y
    
    }


    return context  

# Map
                        
def map(request):
    data = initialise_chart()
    # data['m'] = m
    return render(request, 'map.html', data)

# Routes

def my_routing(request):
    
    return render(request, 'index.html')




def update_charts(request):
    selected_year = request.GET.get("year")
    selected_region = request.GET.get("region")
    selected_census = request.GET.get('census')
    selected_electoral = request.GET.get('electoral')

    # Generate a unique cache key based on the filter parameters
    cache_key = f"data_{selected_year}_{selected_region}_{selected_census}_{selected_electoral}"

    # Check if data is already cached
    data = cache.get(cache_key)

    if not data:
        # Data not in cache, perform the data processing
        if selected_year and not selected_region and not selected_census and not selected_electoral:
            # Case 1: Filter by Year only
            data = initialise_chart(year=selected_year)
        elif selected_census and not selected_year and not selected_region and not selected_electoral:
        #     # Case 3: Filter by Census only
            data = initialise_chart(census=selected_census)
        elif selected_electoral and not selected_year and not selected_region and not selected_census:
            # Case 4: Filter by Electoral only
            data = initialise_chart(electoral=selected_electoral)
        elif selected_year and selected_census and not selected_region and not selected_electoral:
            # Combination: Year and Census
            data = initialise_chart(year=selected_year, census=selected_census)
        elif selected_year and selected_electoral and not selected_region and not selected_census:
            # Combination: Year and Electoral
            data = initialise_chart(year=selected_year, electoral=selected_electoral)
        elif selected_region and not selected_year and not selected_census and not selected_electoral:
            # Case 2: Filter by Region only
            data = initialise_chart(region=selected_region)
        elif selected_year and selected_region and not selected_census and not selected_electoral:
            # Combination: Year and Region
            data = initialise_chart(year=selected_year, region=selected_region)
        else:
            data = initialise_chart()

        # elif selected_region and not selected_year and not selected_census and not selected_electoral:
        #     # Case 2: Filter by Region only
        #     data = initialise_chart(region=selected_region)

        # elif selected_census and not selected_year and not selected_region and not selected_electoral:
        #     # Case 3: Filter by Census only
        #     data = initialise_chart(census=selected_census)
        
        # elif selected_electoral and not selected_year and not selected_region and not selected_census:
        #     # Case 4: Filter by Electoral only
        #     data = initialise_chart(electoral=selected_electoral)
        
        # # elif selected_year and selected_region and not selected_census and not selected_electoral:
        # #     # Combination: Year and Region
        # #     data = initialise_chart(year=selected_year, region=selected_region)
        
        # elif selected_year and selected_census and not selected_region and not selected_electoral:
        #     # Combination: Year and Census
        #     data = initialise_chart(year=selected_year, census=selected_census)
        
        # elif selected_year and selected_electoral and not selected_region and not selected_census:
        #     # Combination: Year and Electoral
        #     data = initialise_chart(year=selected_year, electoral=selected_electoral)
        
        # # elif selected_region and selected_census and not selected_year and not selected_electoral:
        # #     # Combination: Region and Census
        # #     data = initialise_chart(region=selected_region, census=selected_census)
        
        # # elif selected_region and selected_electoral and not selected_year and not selected_census:
        # #     # Combination: Region and Electoral
        # #     data = initialise_chart(region=selected_region, electoral=selected_electoral)
        
        # elif selected_census and selected_electoral and not selected_year and not selected_region:
        #     # Combination: Census and Electoral
        #     data = initialise_chart(census=selected_census, electoral=selected_electoral)
        
        # elif selected_year and selected_region and selected_census and selected_electoral:
        #     # Combination: All filters
        #     data = initialise_chart(year=selected_year, region=selected_region, census=selected_census, electoral=selected_electoral)
        
        # Store the result in the cache for future use
        cache.set(cache_key, data, timeout=60*15)  # Cache for 15 minutes

    return JsonResponse(data, safe=False)




def selectCensus(request):
    census = request.GET.get('census')
    year = request.GET.get('year')
    region = request.GET.get('region')

    # Generate a unique cache key based on the filter parameters
    cache_key = f"data_{year}_{region}_{census}"

    # Check if data is already cached
    data = cache.get(cache_key)

    if not data:
        # Data not in cache, perform the data processing
        # filename3 = f'District_pop_demographics{year}.csv'
        # path3 = os.path.join('path_to_your_data_directory', 'EDATA', filename3)
        # df3 = gpd.read_file(path3)
        
        grouped2P = df3.groupby(['RegName'])
        dfGroup2P = grouped2P.get_group(region) 

        # POPULATION DATA PROCESSING
        dfGroupA2P = df3[["RegName", census]].copy()
        dfGroupA2P[census] = dfGroupA2P[census].astype('float')
        tSum2P = dfGroupA2P[census].values.sum()
        dfContinentSum2P = dfGroupA2P.groupby(by=["RegName"])[census].sum().reset_index()
        graph1AX2P = dfContinentSum2P['RegName'].values.tolist()
        graph1AY2P = dfContinentSum2P[census].values.tolist()

        dfGroupB2P = dfGroup2P[["ConstName", census]].copy()
        dfGroupB2P[census] = dfGroupB2P[census].astype('float')
        tSumB2P = dfGroupB2P[census].values.sum()
        dfContinentSumB2P = dfGroupB2P.groupby(by=["ConstName"])[census].sum().reset_index()
        graph1BX2P = dfContinentSumB2P['ConstName'].values.tolist()
        graph1BY2P = dfContinentSumB2P[census].values.tolist()

        #dfGroupH = df3.columns.tolist()[8:-1]

        context = {
            'tSum2P' : tSum2P,
            'tSumB2P' : tSumB2P,
            'graph1AX2P' : graph1AX2P,
            'graph1AY2P' : graph1AY2P,
            'graph1BX2P' : graph1BX2P,
            'graph1BY2P' : graph1BY2P,
            
        }

        # Store the result in the cache for future use
        cache.set(cache_key, context, timeout=60*15)  # Cache for 15 minutes
    else:
        # Data is already cached, use the cached data
        context = data

    return JsonResponse(context, safe=False)



# ////////////////////////////////////////////////////////////////////////


# TACKLING THE VARIOUS INDIVIDUAL DROPDOWNS ASIDE POPULATION DEMOGRAPHICS

# ////////////////////////////////////////////////////////////////////////

# (1) Chart 1

def selectElectoral1(request):
    electoral = request.GET.get('electoral')
    year = request.GET.get('year')
    region = request.GET.get('region')

    # Generate a unique cache key based on the filter parameters
    cache_key = f"data_{year}_{region}_{electoral}"

    # Check if data is already cached
    data = cache.get(cache_key)

    if not data:
        # Data not in cache, perform the data processing
        # filename3 = f'District_pop_demographics{year}.csv'
        # path3 = os.path.join('path_to_your_data_directory', 'EDATA', filename3)
        # df3 = gpd.read_file(path3)
        # if year == '2024':
        #     df = df2024
        # elif year == '2016':
        #     df = df2016
        # elif year == '2012':
        #     df = df2012
        # elif year == '2008':
        #     df = df2008
        # else:
        #     df = df2020
        
        # grouped = df.groupby(['year_', 'office'])
        # dfGroup = grouped.get_group((year, 'Parliament'))

        groupedNewA = df.groupby(['year_', 'office', 'RegName'])
        dfGroupNew1 = groupedNewA.get_group((year, 'Parliamentary', region))

        groupedNewA = df.groupby(['year_', 'office', 'RegName'])
        dfGroupNew1B = groupedNewA.get_group((year, 'Presidential', region))


        # dfRegions = dfGroup[["RegName", electoral]].copy()
        # dfRegions[electoral] = dfRegions[electoral].replace(',','', regex=True)
        # dfRegions[electoral] = dfRegions[electoral].astype('int')
        # dfRegionsSum = dfRegions.groupby(by=["RegName"])[electoral].sum().reset_index()
        # graph1AX = dfRegionsSum['RegName'].values.tolist()
        # graph1AY = dfRegionsSum[electoral]
        # graph1AX = dfRegionsSum['RegName'].values.tolist()
        # graph1AY = dfRegionsSum[electoral].values.astype(int).tolist()


        dfConst = dfGroupNew1[["ConstName", electoral]].copy()
        dfConst[electoral] = dfConst[electoral].replace(',','', regex=True)
        dfConst[electoral] = dfConst[electoral].astype('int')
        graphSub1AX = dfConst['ConstName'].values.tolist()
        graphSub1AY = dfConst[electoral].values.astype(int).tolist()



        dfConst1B = dfGroupNew1B[["ConstName", electoral]].copy()
        dfConst1B[electoral] = dfConst1B[electoral].replace(',','', regex=True)
        dfConst1B[electoral] = dfConst1B[electoral].astype('int')
        graphSub1BX = dfConst1B['ConstName'].values.tolist()
        graphSub1BY = dfConst1B[electoral].values.astype(int).tolist()



        # // Do Total sum operations for each party on Parliament CONSTITUENCY (C)
        first_C_column1 = dfGroupNew1.columns[dfGroupNew1.columns.str.contains('_C')][0]
        dfGroupCP = dfGroupNew1.loc[:,'NPP':first_C_column1]
        dfGroupCP = dfGroupCP.drop(columns=first_C_column1)
        dfGroupCP = dfGroupCP.replace(',','', regex=True) # Selecting specific columns and getting rid of the commas in the string
        dfGroupCP = dfGroupCP.apply(pd.to_numeric) # Converting all the string in the columns to integers
        tSumCP = dfGroupCP.sum().reset_index() # Sum operation on a specific column
        graph2AXP = tSumCP['index'].tolist()
        graph2AYP = tSumCP[0]
        
        
        # // Do Total sum operations for each party on Presidential CONSTITUENCY (C)
        first_C_column1B = dfGroupNew1B.columns[dfGroupNew1B.columns.str.contains('_C')][0]
        dfGroupDP = dfGroupNew1B.loc[:,'NPP':first_C_column1B]
        dfGroupDP = dfGroupDP.drop(columns=first_C_column1B)
        dfGroupDP = dfGroupNew1B.replace(',','', regex=True) # Selecting specific columns and getting rid of the commas in the string
        dfGroupDP = dfGroupDP.apply(pd.to_numeric) # Converting all the string in the columns to integers
        tSumDP = dfGroupDP.sum().reset_index() # Sum operation on a specific column
        graph2BXP = tSumDP['index']
        graph2BYP = tSumDP[0]

        tSumCAP = tSumCP.values.tolist()
        tSumDAP = tSumDP.values.tolist()


        context = {
            # 'graph1AX' : graph1AX,
            # 'graph1AY' : graph1AY,
            'graphSub1AX' : graphSub1AX,
            'graphSub1AY' : graphSub1AY,
            'graphSub1BX' : graphSub1BX,
            'graphSub1BY' : graphSub1BY,
            'tSumCAP' : tSumCAP,
            'tSumDAP' : tSumDAP,
        
        }

        # Store the result in the cache for future use
        cache.set(cache_key, context, timeout=60*15)  # Cache for 15 minutes
    else:
        # Data is already cached, use the cached data
        context = data

    return JsonResponse(context, safe=False)


# (3) Chart 2

# def selectElectoral2(request):
#     electoral = request.GET.get('electoral')
#     year = request.GET.get('year')
#     region = request.GET.get('region')

#     # Generate a unique cache key based on the filter parameters
#     cache_key2 = f"data_{year}_{region}_{electoral}"

#     # Check if data is already cached
#     data2 = cache.get(cache_key2)

#     if not data2:
#         # Data not in cache, perform the data processing
#         # filename3 = f'District_pop_demographics{year}.csv'
#         # path3 = os.path.join('path_to_your_data_directory', 'EDATA', filename3)
#         # df3 = gpd.read_file(path3)
#         # if year == '2024':
#         #     df = df2024
#         # elif year == '2016':
#         #     df = df2016
#         # elif year == '2012':
#         #     df = df2012
#         # elif year == '2008':
#         #     df = df2008
#         # else:
#         #     df = df2020

#         # grouped = df.groupby(['year_', 'office'])
#         # dfGroup2 = grouped.get_group((year, 'Presidential First Round'))
#         groupedNewA = df.groupby(['year_', 'office', 'RegName'])
#         dfGroupNew1B = groupedNewA.get_group((year, 'Presidential First Round', region))



#         # dfRegions2 = dfGroup2[["RegName", electoral]].copy()
#         # dfRegions2[electoral] = dfRegions2[electoral].replace(',','', regex=True)
#         # dfRegions2[electoral] = dfRegions2[electoral].astype('int')
#         # dfRegionsSum2 = dfRegions2.groupby(by=["RegName"])[electoral].sum().reset_index()
#         # graph1BX = dfRegionsSum2['RegName']
#         # graph1BY = dfRegionsSum2[electoral]
#         # graph1BX = dfRegionsSum2['RegName'].values.tolist()
#         # graph1BY = dfRegionsSum2[electoral].values.astype(int).tolist()


#         dfConst1B = dfGroupNew1B[["ConstName", electoral]].copy()
#         dfConst1B[electoral] = dfConst1B[electoral].replace(',','', regex=True)
#         dfConst1B[electoral] = dfConst1B[electoral].astype('int')
#         graphSub1BX = dfConst1B['ConstName'].values.tolist()
#         graphSub1BY = dfConst1B[electoral].values.astype(int).tolist()
        

#         context = {
#             # 'graph1BX' : graph1BX,
#             # 'graph1BY' : graph1BY,
#             'graphSub1BX' : graphSub1BX,
#             'graphSub1BY' : graphSub1BY,
            
#         }

#         # Store the result in the cache for future use
#         cache.set(cache_key2, context, timeout=60*15)  # Cache for 15 minutes
#     else:
#         # Data is already cached, use the cached data
#         context = data2

#     return JsonResponse(context, safe=False)




   